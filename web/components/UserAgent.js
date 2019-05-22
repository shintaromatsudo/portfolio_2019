export const isServer = () => typeof window === 'undefined'

export const isIOS = () =>
  !isServer() && /iPhone/i.test(window.navigator.userAgent)

export const isAndroid = () =>
  !isServer() && /Android/i.test(window.navigator.userAgent)

export const isNativeIOS = () =>
  !isServer() && window.navigator.userAgent === 'commune_native_app_ios'

export const isNativeAndroid = () =>
  !isServer() && window.navigator.userAgent === 'commune_native_app_android'

export const isNative = () =>
  !isServer() && (isNativeIOS() || isNativeAndroid())

export const isSmartPhone = () => !isServer() && (isIOS() || isAndroid())
