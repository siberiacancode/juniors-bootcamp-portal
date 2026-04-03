import { TaskSettingsProvider } from './_contexts/taskSettings';
import { getTaskSettingsCookieValue } from './_helpers';

const TaskLayout = async ({ children }: LayoutProps<'/tasks/[id]'>) => {
  const initialValue = await getTaskSettingsCookieValue();
  return <TaskSettingsProvider initialValue={initialValue}>{children}</TaskSettingsProvider>;
};

export default TaskLayout;
