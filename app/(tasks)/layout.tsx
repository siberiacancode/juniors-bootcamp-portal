interface TasksLayoutProps {
  children: React.ReactNode;
}

const TasksLayout = ({ children }: TasksLayoutProps) => (
  <>
    {children}
    <style>
      {`
          :root {
            --color-action-primary:var(--color-accent-tertiary);
            --color-action-primary-hover:var(--color-accent-tertiary-hover);
            --color-action-primary-fg:var(--color-accent-tertiary-fg);
          }
        `}
    </style>
  </>
);

export default TasksLayout;
