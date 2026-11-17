# Документация на fumadocs

Fumadocs отвечает только за данные: поиск mdx, frontmatter, дерево страниц, оглавление, соседей.
UI полностью наш: всё, что ниже, — функции, которые возвращают данные для своих компонентов.

## Новая страница задания

`content/tasks/<id>/<slug>.mdx` → `/tasks/<id>/<slug>`, порядок в `content/tasks/<id>/meta.json`.

```mdx
---
title: Оплата
description: Оформление заказа
level: middle # с какого уровня открыта (по умолчанию junior), ниже — замок в сайдбаре
stacks: [react, vue] # необязательно: только для этих стеков, для остальных скрыта
---

Общий текст для всех.

<show when={props.atLeast.middle}>Для middle и senior</show>
<show when={props.level === 'junior'}>Только для junior</show>
<show when={props.stack === 'react'}>Только для React</show>
<show when={props.api === 'graphQL'}>Только для GraphQL</show>
```

`<show>` — встроенный механизм fumadocs: скрытые блоки не попадают ни в HTML, ни в оглавление.
Что лежит в `props`, см. `tasks/getTaskDocProps.ts`. Значения осей — `tasks/constants.ts`.

`index.mdx` в папке задания не используем: `/tasks/<id>` — это лендинг задания.

## Подключить документацию в любую страницу

<!-- eslint-skip -->

```tsx
import { DocBody, getDocPage, tasksSource } from '@/docs';

const doc = getDocPage(tasksSource, ['pizza', 'catalog'], {
  level: 'junior' /* props для <show> */
});
if (doc) return <DocBody doc={doc} />; // doc.toc, doc.data — для своего UI
```

Для заданий есть готовая сборка: `getTaskDoc(id, slug, await getTaskSettings())` возвращает
`doc` (null, если страница закрыта), `lock`, `tree` для сайдбара с пометками и `neighbours`.
Пример использования — `app/(tasks)/tasks/[id]/[...slug]/page.tsx`.

## Новый раздел (не задания)

1. `defineDocs({ dir: 'content/<раздел>' })` в `source.config.ts`
2. `loader({ baseUrl: '/<раздел>', source: <раздел>.toFumadocsSource() })` в `src/docs/sources.ts`
3. Маршрут `app/.../<раздел>/[...slug]/page.tsx`: `getDocPage`, `getDocTree`, `getDocNeighbours`, `DocBody`

`.source/` генерируется сам при `yarn dev` / `yarn build`; вручную — `yarn content:generate`.
