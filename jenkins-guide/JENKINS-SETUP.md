# Jenkins and Sauce OnDemand Plugin Quickstart Guide

This quickstart guide contains setup instructions that allow you to:
* Install and configure your own Jenkins build server
* Connect your Jenkins instance to a GitHub account via the GitHub/Jenkins plugin
* Install the SauceOnDemand Jenkins Plugin

<br />

## Table of Contents

These are the steps to follow to ensure you've configured your Jenkins Server correctly:
* [Installation](#installation)
    * [Install Git](#install-git)
    * [Install Jenkins](#install-jenkins)
    * [Git/Jenkins Plugin](#install-git-jenkins-plugin)
* [Configure Jenkins](#configure-jenkins)
    * [Create a New Job](#create-a-new-job)
    * [Install Sauce OnDemand Jenkins Plugin](#install-sauce-ondemand-jenkins-plugin)
    * [Configure Your SauceLabs Credentials](#configure-your-saucelabs-credentials)
    * [Test the SauceLabs OnDemand Jenkins Plugin](#test-the-saucelabs-ondemand-jenkins-plugin)
<br />

### Installation

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

[Jenkins](https://jenkins.io/) is build automation server that accelerates deverloper workflow. The project has hundreds of plugins that support "building, deploying, and automating any project." In the context of SauceLabs, we can use Jenkins build steps to further automate our unit and regression testing. Below are step-by-step instructions on how to configure Jenkins with SauceLabs
integration/continuous development toolchain.

##### MacOSX:

1. Go to [https://jenkins.io/download/](https://jenkins.io/download/).
2. Under **Long-term Support (LTS)**, click **[Mac OS X](https://jenkins.io/download/thank-you-downloading-osx-installer-stable)**.
3. When the download completes, double-click the `.dmg` file open the installer package.
4. Double-click the installer package to begin the installation.
    > *Security Warning*
    >
    > You may see a warning message that the package can't be opened because it's not from a recognized developer. 
    If this happens, go to System Preferences > Security and Privacy Settings, and click Open Anyway.
5. Click **Continue** for the installation, and enter your local password to authorize the installation.

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

#### Create a New Job
1. Open the Jenkins Dashboard
2. Select **Create New Job**
3. Name the job `jenkins-github-test` and select **OK**
4. In the job configuration, select **Source Code Management**
5. Select the **Git** radial button
    > If the radial button doesn't appear, try re-installing the plugins followed by a restart and re-login to your Jenkins dashboard.
6. Enter the Git repository URL to pull from GitHub
    > You may receive an error message the first time you enter a repo URL. This generally happens if you don't have **`git`** installed on your local machine. If you need to install **`git`**, refer to the parent [README.md](../README.md) for details
7. If you're repository is private enter your GitHub credentials in the **Credentials** section, then click **Add**
8. Save the configuration.
9. Return to the dashboard and run the job. Monitor the dashboard for any errors thrown, if not then you've successfully configured the Jenkins + Github intergration.

<br />

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
2. Click **Credentials**.
3. You can select an existing domain, or select **Add domain**.
4. Select the domain of your choice, and then select **Add Credentials**.
5. Under **Kind**, select **Sauce Labs**.
6. Enter your Sauce Labs **Username** and **Access Key**
    > If you're not sure how to access your SauceLabs credentials go to the [saucelabs.com](https://app.saucelabs.com/dashboard/builds) **Dashboard**, select the arrow next to your account name, and select **User Settings**. Then copy the information to your local clipboard.
7. Click **OK** to save the credentials.

<br />

#### Test the SauceLabs OnDemand Jenkins Plugin

1. Open the Jenkins Dashboard
2. Select **Create New Job**
3. Name the job: `jenkins-saucelabs-github-test`and select **OK**
4. In the job configuration, select **Source Code Management**
5. Select the **Git** radial button, and use the following [Git repository URL]() for this test
6. Under **Sauce Labs Options** ensure your credentials exist in the **Credentials** field
7. Optionally, you can choose to enable Sauce Connect for a secure tunnel to the Sauce labs VMs. For more information on this feature, refer to the [Sauce Connect with the Jenkins Plugin](https://wiki.saucelabs.com/display/DOCSDEV/Configuring+Sauce+Connect+with+the+Jenkins+Plugin) documentation page.
8. Save the configuration and run your job. Navigate to the SauceLabs.com dashboard to see if your test runs correctly.

<br />
