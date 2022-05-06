# 09-share-state

## Dela state

Demo av hur man kan använda Context och Recoil för att dela state i en större app. För att testa:

```bash
git clone <adress-till-det-här-repot>
cd 09-share-state/
npm install
code .
npm run dev
```

+ Skapa en Context-fil och en `<Context.Provider>` för varje "context-paket" du vill använda.

+ Skapa en `<RecoilRoot>` för hela appen, och en `atom` för varje state-variabel du vill använda med Recoil.

Tips! Läs om hur man kan använda Immer för att förenkla uppdatering av komplicerad state i React: [React and Immer](https://immerjs.github.io/immer/example-setstate)
