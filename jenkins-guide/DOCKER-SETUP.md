# Deploy Jenkins using Docker

If you plan on combining this workflow with other service-oriented toolsets, you may want to experiment deploying Jenkins using Docker. For detailed explanation follow the instructions in the Jenkins documentation:[https://jenkins.io/doc/book/installing/#downloading-and-running-jenkins-in-docker](https://jenkins.io/doc/book/installing/#downloading-and-running-jenkins-in-docker)

#### Install Docker

[Docker](https://www.docker.com/why-docker) is a containerization platform used to build and control application deployment. 
In this example we use Docker to setup a local jenkins server and then expose a container port of said server

##### MacOSX:

1. Go to [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/).
2. Click **Download from Docker Hub**.
3. When the download completes, double-click the `.dmg` file open the installer package.
4. Double-click the installer package to begin the installation.
5. Continue through the installation prompts.
6. Sign up for [Docker Hub](https://hub.docker.com/) in order to pull down public docker images.
7. After signing up for Docker Hub, launch the Docker application and set your login credentials

##### Windows:

1. Go to [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/)
2. Click **Download from Docker Hub**.
3. When the download completes, double-click the `.exe` file open the installer package.
4. Follow the steps in the setup wizard to complete the installation. You should accept all the default settings.
5. Continue through the installation prompts.
6. Sign up for [Docker Hub](https://hub.docker.com/) in order to pull down public docker images.
7. After signing up for Docker Hub, launch the Docker application and set your login credentials
<br />


#### Download and Run Jenkins on Docker

##### MacOSX:
1. Open up a terminal window
2. Download the **`jenkinsci/blueocean`** image and run it as a container with the following `docker` cli commands:
```
docker run \
    -u root \
    --rm \  
    -d \ 
    -p 8080:8080 \ 
    -p 50000:50000 \ 
    -v jenkins-data:/var/jenkins_home \ 
    -v /var/run/docker.sock:/var/run/docker.sock \ 
    jenkinsci/blueocean 
```
3. Explanation: the **`-p`** flag sets **`localhost:containerport`** mappings. In other words, **`8080:8080`** implies that the Jenkins server listens on its internal container port of **`8080`**, and the container itself listens on the localhost port **`8080`**.

#### Windows:
1. Open a command prompt window.
2. Download the **`jenkinsci/blueocean`** image and run it as a container with the following `docker` cli commands:
```
docker run ^
    -u root ^
    --rm ^
    -d ^
    -p 8080:8080 ^
    -p 50000:50000 ^
    -v jenkins-data:/var/jenkins_home ^
    -v /var/run/docker.sock:/var/run/docker.sock ^
    jenkinsci/blueocean
```
3. Explanation: the **`-p`** flag sets **`localhost:containerport`** mappings. In other words, **`8080:8080`** implies that the Jenkins server listens on its internal container port of **`8080`**, and the container itself listens on the localhost port **`8080`**.

Again, for more detailed instrucitons on running Jenkins in Docker refer to the Jenkins documentation page: [https://jenkins.io/doc/book/installing/#downloading-and-running-jenkins-in-docker](https://jenkins.io/doc/book/installing/#downloading-and-running-jenkins-in-docker)