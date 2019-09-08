# zo-analytic

## Steps to run the application
1. React Native Environment setup(https://facebook.github.io/react-native/docs/getting-started)
2. git clone https://github.com/pushpendra-choudhary/zo-analytic.git
3. cd zo-analytic
4. yarn install
5. `react-native run-android` to run the application in android and `react-native run-ios` to run the application in ios devices


## Basic Structue Explainantion:
Folders: 
        1. app: application source folder
        2. assets: application assets(custom images/ data) folder

    app subfolders:
        Action: Redex Actions
        AppRoutes: Application Routes(React-Navigation utilised)
        Config: Configuration(Redux Store available here) folder
        Modules: Application modules(there are two modules in the app i. Auth ii. analytic)
        Reducers: Redux Reducers
        Utils: Utility Folder
