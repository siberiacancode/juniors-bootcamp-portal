import { getYandexMetrikaScript, YandexMetrikaNoScript } from '@siberiacancode/yandex-metrika';
import Script from 'next/script';

const COUNTER_ID = 108002818;

export const YandexMetrikaScript = () => (
  <>
    <Script
      dangerouslySetInnerHTML={{
        __html: getYandexMetrikaScript(COUNTER_ID)
      }}
      id='yandex-metrika'
      strategy='afterInteractive'
    />
    <YandexMetrikaNoScript counterId={COUNTER_ID} />
  </>
);
