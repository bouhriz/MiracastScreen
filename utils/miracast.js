import { PermissionsAndroid } from 'react-native';

export const isMiracastSupported = async () => {
  try {
    const hasMiracastFeature = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    const isMiracastEnabled = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);

    return hasMiracastFeature && isMiracastEnabled;
  } catch (error) {
    console.log('Error checking Miracast support:', error);
    return false;
  }
};
