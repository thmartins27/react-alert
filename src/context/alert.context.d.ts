export type AlertType = 'success' | 'error'
export type AlertConfig = {
  message: string
  title: string
  time?: number
  callback?: () => void
}
export type OpenAlert = (open: React.Dispatch<boolean>, config: AlertConfig) => void
export type Alert = (type: AlertType, config: AlertConfig) => void
export interface AlertContextInterface {
  alert: Alert
}