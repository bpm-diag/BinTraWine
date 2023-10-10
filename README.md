# Blockchain-based multi-party processes in coopetitive scenarios: the BinTraWine approach in agrifood supply chains
This repository contains the actual version of the BinTraWine approach.

In the following guide, we are going to describe the necessary steps and instructions to run the BinTraWine system.

## How to run the BinTraWine system

### Requirements
- Install [Docker](https://www.docker.com/)
- Install [Node.js](https://nodejs.org/en) (recommended version: **18.16.0**)

## Usage

Once requirements have been installed, clone the git repository by running the following command:

```bash
git clone https://github.com/bpm-diag/BinTraWine.git
```
The previous command pulls the code from the remote repository on GitHub. By default the branch main is fetched.
Once the code has been fetched, the following must be executed to run the Web Application:

1) Change the current directory to the root project folder:
```bash
cd BinTraWine
```
2) Add the **.env** file with the following variables:

```bash
DATABASE_URL="postgresql://postgres:test1234@postgres/postgresbtw?schema=public"
SERVER_IP=149.132.178.150
NEXTAUTH_URL=http://149.132.178.150:3000
NEXTAUTH_SECRET=YRjU8nuKMtrm4JobvXs035ET6TYctOivoFGbbfPcWtc=
NEXTAUTH_JWT_SECRET=YRjU8nuKMtrm4JobvXs035ET6TYctOivoFGbbfPcWtc=
NODE_IP=149.132.178.150
NODE_PORT=22006
OUTSIDEPORT=3000
POSTGRESQL_PASS=test1234
```
Change the **IP of the server** specified in **SERVER_IP**, **NEXTAUTH_URL** and **NODE_PORT** by setting the IP of the server where the application is deployed. Specify also another port in **NEXTAUTH_URL** and **OUTSIDEPORT**, if the **3000** is already occupied.

Copy the same **.env** file in the **bintrawine-next** folder.

3) Change the current directory to **bintrawine-next**
```bash
cd bintrawine-next
```

4) Install node modules using **pnpm** or **npm**:
```bash
pnpm install
```

5) Generate prisma client:
```bash
npx prisma generate
```

6) Prepare the build using **pnpm** or **npm**:
```bash
pnpm build
```

7) Change the current directory to the root one:
```bash
cd ..
```

8) Run docker containers in detach mode to run them in background:
```bash
docker-compose up -d
```
Once containers are running, wait a minute to perform the next action beacause quorum nodes must be initialized.

9) Deploy smart contracts on the Blockchain:
```bash
npm run migrate
```
or
```bash
pnpm migrate
```

If the previous command is executed too early, an error will appear on console. Try to re-execute the command again until the deploy run correctly.

10) The last important step is to check if contract addresses just deployed are correct in the following file:
```bash
/bintrawine-next/src/server/api/routers/blockChain/filiera/contracts.ts
```
If the addresses are not correct, change them with the correct ones.
