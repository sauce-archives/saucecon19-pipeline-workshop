# Creating a Continuous Delivery Pipeline with Automated Testing

This directory contains example scripts and dependencies for the SauceCon workshop: [Creating a Continuous Delivery Pipeline with Automated Testing](https://saucecon.com/). Use these scripts to test your Sauce Labs authentication credentials, setup your automated testing environment, try out Sauce Labs features, and complete the in-class Selenium examples. Download the zip file or clone the entire directory to your local environment.

 > #### Disclaimer: For Demonstration Purposes Only

> The code in these scripts is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. These scripts are provided for educational and demonstration purposes only, and should not be used in production. Issues regarding these scripts should be submitted through GitHub. These scripts are maintained by the Technical Services team at Sauce Labs.

<br />

## Prerequisites

In order to complete these exercises you must complete the following prerequisite installation and configuration steps:

* [Install Git](#install-git)
* [Install Node and NPM](#install-npm-and-nodejs)
* [Install an IDE (IntelliJ, WebStorm, Atom etc.)](#install-an-ide)
* [Install WebDriverIO](install-webdriverio)

<br />

## Setting Up the Project
Refer to the [getting started guide](exercise-guides/getting-started.md#setup-the-project) for step-by-step instructions on how to setup the project and submit a pull request.

<br />

## Completing the Exercises
Refer to the [getting started guide](exercise-guides/getting-started.md#exercise-list), for step by step instructions for each exercise challenge.

<br />

## Installation Guides
Below are the step-by-step instructions for installing the [prerequisites](#prerequisites)

<br />

### Install Git

[Git](https://git-scm.com/doc) is a version control system that lets you check out code from a repository, 
work with that code on your own branch, and then merge that code with any changes that have been made by other developers. 
Git is an essential tool for distributed development teams, and is a critical component of the continuous 
integration/continuous development toolchain.

##### MacOSX:

1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads).
2. Under **Downloads**, click **Mac OS X**.
3. When the download completes, double-click the `.dmg` file open the installer package.
4. Double-click the installer package to begin the installation.
    > *Security Warning*
    >
    > You may see a warning message that the package can't be opened because it's not from a recognized developer. 
    If this happens, go to System Preferences > Security and Privacy Settings, and click Open Anyway.
5. Click **Continue** for the installation, and enter your local password to authorize the installation.

##### Windows:

1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Under **Downloads**, click on **Windows**.
3. When the dialog opens asking if you want to allow the app to make changes to your device, click Yes.
4. Follow the steps in the setup wizard to complete the installation. You should accept all the default settings.

<br />

### Install NPM and NodeJS
[NPM](https://www.npmjs.com/get-npm) is the primary package manager that will help to resolve dependency issues.

1. Go to https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm).
2. Click the button that reads "Download Node.js and NPM.
3. The site will detect which operating system you're currently running and present the requesite packages. 
4. Choose LTS, and open up the package to run the installer.
5. Follow the prompts to complete the installation.
6. To ensure NPM and Node.js installed correctly, open a terminal/shell and run the following command:
   ```
   node -v
   npm -v
   ```
  [NodeJS](https://nodejs.org/en/download/) lets you develop and deploy JavaScript applications on desktops and servers. If you which to download and install the package manually refer to the following instructions:

#### MacOSX:
1. Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Under **LTS**, click **Mac OS Installer X**.
3. When the download completes, double-click the `.pkg` file to open the installer
4. Follow the prompts to complete the installation.

#### Windows:
1. Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Under **LTS**, click **Windows Installer**.
3. When the download completes, double-click the `.msi` file to open the installer
4. Follow the prompts to complete the installation.

<br />

### Install an IDE

It's recommended to install and Integrated Developer Environment, or a text editor, to help manage package dependencies, interperters, and overall code execution. There are several options available, some of them are free and some require payment:

* [Atom IDE](https://ide.atom.io/) free, IDE developed by GitHub.
* [WebStorm](https://www.jetbrains.com/webstorm/) free trial, paid after 30 days, developed by JetBrains.
* [Komodo Edit](https://www.activestate.com/komodo-edit), free, text editor, stripped down version of [Komodo IDE](https://www.activestate.com/products/komodo-ide/features/) (paid version).
* [Brackets](http://brackets.io/) free, text editor, contains a wealth of community plugins and extensions.

In our examples we use IntelliJ Community version. [IntelliJ](https://www.jetbrains.com/idea/) is an integrated development environment that incorporates several tools for developing and running Java code. You will be using IntelliJ to write and edit the sample Selenium scripts used in the exercises.  For these exercises you only need to download the free Community edition.

#### MacOSX:

1. Go to [https://www.jetbrains.com/idea/](https://www.jetbrains.com/idea/)
2. Click **Download**.
3. On the **Downloads** page, select **macOS**.
4. Under **Community**, click **Download**.
5. When the download completes, double-click the .dmg file open the installer package.
6. Double-click the installer package to begin the installation.
7. Drag and drop the IntelliJ icon into the **Applications** folder.

#### Windows:

1. Go to [https://www.jetbrains.com/idea/](https://www.jetbrains.com/idea/)
2. Click **Download**.
3. On the **Downloads** page, select **Windows**.
4. Under **Community**, click **Download**.
5. When the download completes, double-click the `.exe` file to launch the installation wizard. 
You should accept all the default settings.

<br />

### Install NPM and NodeJS
[NPM](https://www.npmjs.com/get-npm) is the primary package manager that will help to resolve dependency issues.

1. Go to https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm).
2. Click the button that reads "Download Node.js and NPM.
3. The site will detect which operating system you're currently running and present the requesite packages. 
4. Choose LTS, and open up the package to run the installer.
5. Follow the prompts to complete the installation.
6. To ensure NPM and Node.js installed correctly, open a terminal/shell and run the following command:
   ```
   node -v
   npm -v
   ```
  [NodeJS](https://nodejs.org/en/download/) lets you develop and deploy JavaScript applications on desktops and servers. If you which to download and install the package manually refer to the following instructions:

#### MacOSX:
1. Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Under **LTS**, click **Mac OS Installer X**.
3. When the download completes, double-click the `.pkg` file to open the installer
4. Follow the prompts to complete the installation.

#### Windows:
1. Go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Under **LTS**, click **Windows Installer**.
3. When the download completes, double-click the `.msi` file to open the installer
4. Follow the prompts to complete the installation.

<br />

### Install WebDriverIO

[WebDriverIO](https://webdriver.io/) is the next gen test framework for NodeJS that's an independent implementation of the JSON Wire Protocol that wraps lower level requests into a concise syntax.

Currently NodeJS bindings are available so to install WebDriverIO you must have NPM and internet access:
```aidl
    $ npm install webdriverio
```
For more information, please refer to the [WebDriverIO GitHub Page](https://github.com/webdriverio/webdriverio) 

<br />

### (Optional) Install and Configure Jenkins Locally
A Jenkins build server is provided during the workshop, if you wish to re-produce the setup on your local machine consult the instructions located in the [./jenkins-guides/](./jenkins-guide/JENKINS-SETUP.md#install-jenkins) directory. Additionally, if you wish to deploy and manage Jenkins via Docker containers, refer to the instructions located in the [./jenkins-guides/](./jenkins-guide/JENKINS-SETUP.md#optional-deploy-jenkins-using-docker) directory.

<br />

### (Optional) Install GeckoDriver
This option is for if you wish to test locally. The [GeckoDriver](https://github.com/mozilla/geckodriver/releases) is Mozilla's proxy for W3C WebDriver clients that interact with Gecko-based (firefox) browsers. We use GeckoDriver to ensure we've configured Node and WebdriverIO correctly.

#### MacOSX:
1. Go to [https://github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases).
2. Under **Assets**, select and download the latest **`-macos.tar.gz`** release.
3. When the download completes, double-click the `.tar.gz` file to extract the binary
4. Move the `geckodriver` runtime file into your project dependency folder i.e. `lib`.

#### Windows:
1. Go to [https://github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases).
2.  Under **Assets**, select and download the latest **`-win64.zip`** release (select **`-win32.zip`** for 32-bit systems).
3. When the download completes, double-click the `.zip` file to extract the executable
4.  Move the `geckodriver.exe` file into your project dependency folder i.e. `lib`.

#### Using NPM:
1. If you have internet access you can simply run the following command in an IntelliJ shell/terminal:
    ```aidl
    $ npm install geckodriver
    ```
2. Then use the provided driver located in your `bin` directory.

<br />