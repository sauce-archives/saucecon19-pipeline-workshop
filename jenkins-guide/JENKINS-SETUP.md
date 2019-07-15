# Jenkins and Sauce OnDemand Plugin Quickstart Guide

This quickstart guide contains setup instructions that allow you to:
* Install and configure your own Jenkins build server
* Connect your Jenkins instance to a GitHub account via the GitHub/Jenkins plugin
* Install the Sauce OnDemand Jenkins Plugin


## Table of Contents

These are the steps to follow to ensure you've configured your Jenkins Server correctly:
* [Installation](#installation)
    * [Install JDK](#install-jdk-8-or-11)
    * [Install Git](#install-git)
    * [Install Jenkins](#install-jenkins)
    * [Git/Jenkins Plugin](#install-git-jenkins-plugin)
* [Configure Jenkins](#configure-jenkins)
    * [Install Sauce OnDemand Jenkins Plugin](#install-sauce-ondemand-jenkins-plugin)
    * [Configure Your SauceLabs Credentials](#configure-your-saucelabs-credentials)
    * [Test the SauceLabs OnDemand Jenkins Plugin](#test-the-saucelabs-ondemand-jenkins-plugin)
<br />

### Installation

#### Install JDK 8 or 11

Jenkins requires a Java 8 or 11 runtime environment. See [the following page](https://jenkins.io/doc/administration/requirements/java/) for requirements and further details.

##### MacOSX:

1. Go to [the JDK downloads](https://www.oracle.com/technetwork/java/javase/downloads/index.html) page, locate the latest release, select the download button.
2. Under **Java SE Development Kit {version}**, select the **Accept License Agreement** radio button.
3. Click the download link for **Mac OS**.
4. When the download completes, double-click the `.dmg` file open the installer package.
Double-click the installer package to begin the installation.

##### Windows:

1. Go to [the JDK downloads](https://www.oracle.com/technetwork/java/javase/downloads/index.html) page, locate the latest release, select the download button.
2. Under **Java SE Development Kit {version}**, select the **Accept License Agreement** radio button.
3. Click the download link for **Windows x64**.
4. When the download completes, double-click the `.exe` file open the installer package.
5. Double-click the installer package to begin the installation. You should accept all the default settings.

<br />

#### Install Git

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

#### Install Jenkins

Below are step-by-step instructions on how to configure Jenkins on the OS of your choice.

##### MacOSX:
There are several options on how to install Jenkins on a Mac OSX machine:
* [Use JDK 8 or 11 to run the `war` file](#using-jdk-8-or-11)
* [Use `homebrew`](#using-homebrew)
* [Use the Mac OSX Installer](#using-the-macosx-installer)

###### Using JDK 8 or 11:
1. Download the `.war` file [from the following link](http://mirrors.jenkins.io/war-stable/latest/jenkins.war)
2. Open up a terminal and navigate to the download directory
3. Run the following command:
    ```
    java -jar jenkins.war --httpPort=8080
    ```
4. Open a local web browser and navigate to `http://localhost:8080`
    
    > Warning: if you already have an application running on port 8080 you must specify a different port
5. Follow the instructions to complete the installation.


###### Using `homebrew`
1. Install [homebrew](https://brew.sh/)
2. Open a terminal on your machine
3. Run `brew install jenkins` or `brew install jenkins-lts`
4. If you want to change the port number, open the file located in `/usr/local/Cellar/jenkins/2.x.x/homebrew.mxcl.jenkins.plist`, and edit the port number like so:
```
--httpPort=8080
```
You may also start your jenkins instance with `homebrew` with the following command:
```
brew services start jenkins
```
or if you don't want `jenkins` to run as a background service you can run it directly from the command prompt:
```
jenkins
```


###### Using the MacOSX Installer:

1. Go to [https://jenkins.io/download/](https://jenkins.io/download/).
2. Under **Long-term Support (LTS)**, click **[Mac OS X](https://jenkins.io/download/thank-you-downloading-osx-installer-stable)**.
3. When the download completes, double-click the `.dmg` file open the installer package.
4. Double-click the installer package to begin the installation.
    > *Warnings*
    > * 1: You may encounter an error regarding the installer failing. This is due to the `uids` on your local machine being occupied. Visit the [following bug report to find a fix.](https://issues.jenkins-ci.org/browse/JENKINS-43284)
    > * 2: You may see a warning message that the package can't be opened because it's not from a recognized developer. 
    If this happens, go to System Preferences > Security and Privacy Settings, and click Open Anyway.
5. Click **Continue** for the installation, and enter your local password to authorize the installation.

<br />

##### Windows:

1. Go to [https://jenkins.io/download/](https://jenkins.io/download/).
2. Under **Long-term Support (LTS)**, click **[Windows](https://jenkins.io/download/thank-you-downloading-windows-installer-stable)**.
3. When the dialog opens asking if you want to allow the app to make changes to your device, click Yes.
4. Follow the steps in the setup wizard to complete the installation. You should accept all the default settings.

<br />

#### Install Git Jenkins Plugin
The [Git/Jenkins](https://github.com/jenkinsci/git-plugin) plugin allows us to trigger jobs in Jenkins based on activity in a specific git repository.

1. On your Jenkins Administration page, click **Manage Jenkins**
2. Click **Manage Plugins**
3. In the Plugins Page, select **Git Plugin** checkbox.
4. At the bottom of the page, select **Download now and Install after restart**
5. After the download completes, return to your dashboard and re-select **Manage Jenkins**.
6. You will see the plugin listed amongst the rest

<br />

### Configure Jenkins
The [Sauce OnDemand Jenkins](https://wiki.jenkins.io/display/JENKINS/Sauce+OnDemand+Plugin) plugin allows you to use SauceLabs VMs during your build and deploy cycles.

Below are the steps on how to configure the OnDemand plugin as a Jenkins build step. If at any point you require further explanation, please visit this [Sauce Labs Wiki page](https://wiki.saucelabs.com/display/DOCS/Installing+and+Configuring+the+Sauce+OnDemand+Plugin+for+Jenkins) for further explanation.

#### Install Sauce OnDemand Jenkins Plugin
1. On your Jenkins Administration page, click **Manage Jenkins** 
2. Click **Manage Plugins** 
3. Click the **Available** tab. 
4. In the list of plugins, find and select **Sauce OnDemand Plugin**. 
5. Click **Download now and Install after restart**.
    > The plugin file is fairly large, so the download may take several minutes.  
6. In the plugin installation dialog, select **Restart Jenkins** when installation is complete and no jobs are running. 

<br />

#### Configure Your SauceLabs Credentials

In order to use the Sauce OnDemand Plugin, you must authenticate your SauceLabs account. 

The plugin provides an interface for storing your SauceLabs auth credentials as environment variables on the Jenkins Server so that you don't need to hard code the values.

1. Restart Jenkins and go to your **Administration** Page.
2. On the left-hand side, click **Credentials**.
3. You can select an existing domain, or select **Add domain**.
    > If you don't see these options it means you are not a Jenkins Admin. Confirm you have admin privileges before continuing.
4. Select the domain of your choice, and then select **Add Credentials**.
5. Under **Kind**, select **Sauce Labs**.
6. Enter your Sauce Labs **Username** and **Access Key**
    > If you're not sure how to access your SauceLabs credentials go to the [saucelabs.com](https://app.saucelabs.com/dashboard/builds) **Dashboard**, select the arrow next to your account name, and select **User Settings**. Then copy the information to your local clipboard.
7. Click **OK** to save the credentials.

<br />

#### Test the SauceLabs OnDemand Jenkins Plugin

1. Open the Jenkins Dashboard
2. Select **Create New Jobs** or **Create New Item**
3. Select **Freestyle Project**
3. Name the job `jenkins-saucelabs-github-test` and select **OK**
4. In the job configuration, select **Source Code Management**
5. Select the **Git** radial button
    > If the radial button doesn't appear, try re-installing the plugins followed by a restart and re-login to your Jenkins dashboard.
6. Enter the Git repository URL to pull from GitHub
    > You may receive an error message the first time you enter a repo URL. This generally happens if you don't have **`git`** installed on your local machine.
7. If you're repository is private enter your GitHub credentials in the **Credentials** section, then click **Add**.
    > If you've enabled 2 factor auth for your GitHub Account, add an SSH Key specific to your Jenkins instance by following the [instructions here](https://help.github.com/en/articles/connecting-to-github-with-ssh) or [here](https://wiki.jenkins.io/display/JENKINS/SSH+Credentials+Plugin)
8. Save the configuration.
    > Note: it's best to ensure the repo you've set in **Source Code Management** has a legitimate Selenium test, if you're unsure feel free to use [one of our examples](https://github.com/saucelabs-sample-test-frameworks/sample-Jenkins-pipeline) in our sample frameworks GitHub organization.
9. Return to the dashboard and run the job. Monitor the dashboard for any errors thrown, if not then you've successfully configured the Jenkins + Github integration.

<br />
