# Expo Linking API: Malformed URLs with Special Characters in Query Parameters

This repository demonstrates a bug in Expo's `Linking` API where URLs containing special characters in their query parameters are not correctly parsed, especially on Android. This leads to unexpected app behavior or crashes.

## Bug Description
The `Linking.getInitialURL()` method in Expo may fail to retrieve the correct URL or return a malformed URL when the app is launched via a deep link containing special characters (e.g., `+`, `%`, `&`, etc.) in the query parameters.

## Reproduction Steps
1. Clone this repository.
2. Run the app on both iOS and Android emulators/devices.
3. Observe the console logs when launching the app via a deep link containing special characters in the query parameters (see `App.js` for example URLs).
4. Note the different behavior (or errors) between iOS and Android platforms.

## Solution
The solution involves URL encoding the query parameters before using them in the deep link.  The provided `bugSolution.js` file demonstrates this corrected approach.

## Technologies Used
* React Native
* Expo
* JavaScript