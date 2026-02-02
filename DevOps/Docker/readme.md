
# 🐳✨ **Docker Cheat Sheet & Quick Reference**

---

## 📦 **Basic Docker Commands**

| 🏷️ Command | 💡 Description | 🔗 Example |
|:---|:---|:---|
| `docker pull <image>` | Pull image from registry | `docker pull ubuntu` |
| `docker run -it <image>` | Run container interactively | `docker run -it ubuntu` |
| `docker build -t <name> .` | Build image from Dockerfile | `docker build -t hello-docker .` |
| `docker images` | List all images | `docker images` |
| `docker run <image>` | Run a container | `docker run hello-docker` |
| `docker ps` | List running containers | `docker ps` |
| `docker ps -a` | List all containers | `docker ps -a` |
| `docker stop <id>` | Stop a container | `docker stop 123abc` |
| `docker rm <id>` | Remove stopped container | `docker rm 123abc` |
| `docker rm <id> --force` | Force remove running container | `docker rm 123abc --force` |
| `docker container prune` | Remove all stopped containers | `docker container prune` |
| `docker rmi <image>` | Remove image | `docker rmi hello-docker` |
| `docker rmi <image> --force` | Force remove image | `docker rmi hello-docker --force` |
| `docker image prune` | Remove unused images | `docker image prune` |
| `docker logs <id>` | View container logs | `docker logs 123abc` |
| `docker login` / `docker logout` | Login/Logout Docker registry | `docker login` |
| `docker tag <src> <target>` | Tag image | `docker tag react-docker agent0007/react-docker` |
| `docker push <image>` | Push image to registry | `docker push agent0007/react-docker` |
| `docker run -p 5173:5173 -v "${PWD}:/app" -v /app/node_modules react-docker` | Run React app with port & volume |  |

---

## 📝 **Dockerfile Example**

```Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
CMD node hello.js
```

---

## 🛠️ **What is Docker Compose?**

> 🧩 **Docker Compose** is a tool that allows you to define and manage multi-container Docker applications using a simple YAML file. It enables you to configure your application's services, networks, and volumes in a single file, making it easier to deploy and manage complex applications with multiple interconnected components.

---

## 🧩 **Docker Compose Commands**

| 🏷️ Command | 💡 Description |
|:---|:---|
| `docker-compose up` | Start all services defined in `docker-compose.yml` |
| `docker-compose down` | Stop and remove containers, networks, images, and volumes |
| `docker-compose build` | Build or rebuild services |
| `docker-compose ps` | List containers |
| `docker-compose logs` | View output from containers |
| `docker-compose stop` | Stop services |
| `docker-compose start` | Start services |
| `docker-compose restart` | Restart services |
| `docker-compose exec <service> <cmd>` | Run a command in a running service |

---

## 🧠 **Tips & Best Practices**

- 🏷️ Use meaningful image and container names for clarity.
- 📦 Clean up unused images and containers regularly.
- 🔒 Never store secrets in Dockerfiles or images.
- 📝 Use `.dockerignore` to avoid copying unnecessary files.
- 🧩 Use Compose for multi-container setups.

---

## 🚀 **Useful Links**

- [Official Docker Documentation](https://docs.docker.com/)
- [Docker Compose Docs](https://docs.docker.com/compose/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)

---

