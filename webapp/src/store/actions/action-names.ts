export enum MainPageActions {
  SET_SELECTED_RESOURCES = 'MainPageActions/SET_SELECTED_RESOURCES',
  SET_TABLE_SORT_BY = 'MainPageActions/SET_TABLE_SORT_BY',
}

export enum NotificationsActions {
  DISMISS_NOTIFICATION = 'NotificationsActions/DISMISS_NOTIFICATION',
  PUSH_NOTIFICATION = 'NotificationActions/PUSH_NOTIFICATION',
}

export enum ResourcePageActions {
  TOGGLE_IS_SELECTED_ALL_JUPYTER = 'ResourcePageActions/TOGGLE_IS_SELECTED_ALL_LOCAL',
  TOGGLE_IS_SELECTED_ALL_HYDROSHARE = 'ResourcePageActions/TOGGLE_IS_SELECTED_ALL_HYDROSHARE',
  TOGGLE_IS_SELECTED_ONE_JUPYTER = 'ResourcePageActions/TOGGLE_IS_SELECTED_ONE_LOCAL',
  TOGGLE_IS_SELECTED_ONE_HYDROSHARE = 'ResourcePageActions/TOGGLE_IS_SELECTED_ONE_HYDROSHARE',
  SORT_BY_NAME = 'SORT_BY_NAME',
  SEARCH_BY = 'SEARCH_BY',
  SEARCH_RESOURCE_BY = 'SEARCH_RESOURCE_BY',
}

export enum ResourcesActions {
  NOTIFY_GETTING_RESOURCES = 'ResourcesActions/NOTIFY_GETTING_RESOURCES',
  NOTIFY_GETTING_RESOURCES_FAILED = 'ResourcesActions/NOTIFY_GETTING_RESOURCES_FAILED',
  NOTIFY_GETTING_WORKSPACE_FILES_FAILED = 'ResourcesActions/NOTIFY_GETTING_WORKSPACE_FILES_FAILED',
  NOTIFY_GETTING_RESOURCE_HYDROSHARE_FILES = 'ResourcesActions/NOTIFY_GETTING_RESOURCE_HYDROSHARE_FILES',
  NOTIFY_GETTING_RESOURCE_JUPYTERHUB_FILES = 'ResourcesActions/NOTIFY_GETTING_RESOURCE_JUPYTERHUB_FILES',
  NOTIFY_GETTING_RESOURCE_HYDROSHARE_FILES_FAILED = 'ResourcesActions/NOTIFY_GETTING_RESOURCE_HYDROSHARE_FILES_FAILED',
  NOTIFY_GETTING_RESOURCE_JUPYTERHUB_FILES_FAILED = 'ResourcesActions/NOTIFY_GETTING_RESOURCE_JUPYTERHUB_FILES_FAILED',
  SET_RESOURCES = 'ResourcesActions/SET_RESOURCES',
  SET_RESOURCE_LOCAL_FILES = 'ResourcesActions/SET_RESOURCE_LOCAL_FILES',
  SET_RESOURCE_HYDROSHARE_FILES = 'ResourcesActions/SET_RESOURCE_HYDROSHARE_FILES',
  SET_ARCHIVE_MESSAGE = "ResourcesActions/SET_ARCHIVE_MESSAGE",
  SET_FILES_STATUS_CHANGED = 'ResourcesActions/SET_FILES_STATUS_CHANGED'
}

export enum UserInfoActions {
  NOTIFY_ATTEMPTING_HYDROSHARE_LOGIN = 'UserInfoActions/NOTIFY_ATTEMPTING_HYDROSHARE_LOGIN',
  NOTIFY_HYDROSHARE_AUTHENTICATION_FAILED = 'UserInfoActions/NOTIFY_HYDROSHARE_CREDENTIALS_INVALID',
  NOTIFY_RECEIVED_HYDROSHARE_LOGIN_RESPONSE = 'UserInfoActions/NOTIFY_RECEIVED_HYDROSHARE_LOGIN_RESPONSE',
  SET_USER_INFO = 'UserInfoActions/SET_USER_INFO',
  LOGOUT = 'UserInfoActions/LOGOUT',
  CHECK_DIRECTORY_SAVED_RESPONSE = 'UserInfoActions/CHECK_DIRECTORY_SAVED_RESPONSE',
}

export enum DirectoryActions {
  NOTIFY_DIRECTORY_RESPONSE = 'DirectoryActions/NOTIFY_DIRECTORY_RESPONSE',
  NOTIFY_DIRECTORY_ERROR_RESPONSE = 'DirectoryActions/NOTIFY_DIRECTORY_ERROR_RESPONSE',
  NOTIFY_FILE_SAVED_RESPONSE = 'DirectoryActions/NOTIFY_FILE_SAVED_RESPONSE'
}
