export type ApiType = 'graphQL' | 'rest';

export type LevelName = 'junior' | 'middle' | 'senior';

export interface TaskSettingsCookieValue {
  api: ApiType;
  level: LevelName;
}
