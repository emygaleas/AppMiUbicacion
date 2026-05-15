import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'MiUbicacionApp',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      backgroundColor: "#dbcace", // Color de fondo del splash screen en formato ARGB
      launchShowDuration: 0, // Indica cuanto tiempo se va a mostrar el splash screen, se lo llamará desde otro lado
      launchAutoHide: true,
      // launchFadeOutDuration: 3000, // Determina cuanto dura el desvanecimiento del splash screen
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP", // Tipo de escalado para el splash screen en Android
      showSpinner: false, // Whether to show the spinner on the splash screen
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true, // Splash screen will cover the entire screen, including the status bar
      splashImmersive: true, // Splash screen will be displayed in immersive mode, hiding the status bar and navigation bar
      layoutName: "launch_screen",
      useDialog: false,
    },
  },
};

export default config;
