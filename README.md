# 📱 Taller – Aplicación de Geolocalización

## 👩‍💻 Elaborado por

Emily Alejandra Galeas Tingo

---

# 📌 Descripción del Taller

Desarrollo de una aplicación móvil híbrida utilizando Ionic y Angular basada en el proyecto:

🔗 [https://github.com/jzaldumbide/MiUbicacionAPP_ionic](https://github.com/jzaldumbide/MiUbicacionAPP_ionic)

La aplicación permite:

* Obtener la geolocalización actual del dispositivo.
* Registrar las coordenadas en Firebase.
* Registrar las coordenadas en Supabase.
* Generar un enlace que redirecciona automáticamente a Google Maps.
* Ejecutar la aplicación mediante APK en un dispositivo móvil Android.

---

# 🎯 Objetivos del Taller

## ✅ 1. Registrar geolocalización en Firebase y Supabase

Se implementó el almacenamiento de coordenadas geográficas utilizando dos servicios en la nube:

* Firebase Firestore
* Supabase PostgreSQL

Cada vez que se obtiene la ubicación actual del usuario, la aplicación registra:

* Latitud
* Longitud
* Fecha de registro

---

## ✅ 2. Generar un enlace hacia Google Maps

La aplicación genera un enlace dinámico utilizando las coordenadas obtenidas del dispositivo.

El enlace tiene el siguiente formato:

```txt
https://www.google.com/maps?q=LATITUD,LONGITUD
```

Al presionar el botón “Abrir Google Maps”, la aplicación abre automáticamente Google Maps en el navegador mostrando la ubicación actual del usuario.

---

## ✅ 3. Generar APK funcional

La aplicación fue compilada utilizando Capacitor y Android Studio.

El APK fue ejecutado exitosamente en un dispositivo Android físico verificando:

* Obtención correcta de geolocalización.
* Guardado de datos en Firebase.
* Guardado de datos en Supabase.
* Apertura correcta de Google Maps.
* Funcionamiento del seguimiento de ubicación.

---

# 🛠️ Tecnologías Utilizadas

| Tecnología         | Descripción                                 |
| ------------------ | ------------------------------------------- |
| Ionic              | Framework híbrido para aplicaciones móviles |
| Angular            | Framework frontend                          |
| Capacitor          | Integración nativa para Android             |
| Firebase Firestore | Base de datos NoSQL en la nube              |
| Supabase           | Base de datos PostgreSQL                    |
| Google Maps        | Visualización de ubicación                  |
| Android Studio     | Compilación y generación del APK            |

---

# 📂 Estructura del Proyecto

```txt
src/
 ├── app/
 │    ├── home/
 │    │     ├── home.page.html
 │    │     ├── home.page.scss
 │    │     └── home.page.ts
 │    │
 │    ├── services/
 │    │     ├── location.ts
 │    │     ├── firebase.service.ts
 │    │     └── supadatabase.ts
 │
 ├── environments/
 │     └── environment.ts
```

---

# ⚙️ Instalación de Dependencias

## Instalar dependencias principales

```bash
npm install firebase
npm install @supabase/supabase-js
npm install @capacitor/geolocation
npm install --save-dev @types/node
```

---

# 🔥 Configuración de Firebase

## Crear proyecto en Firebase

1. Ingresar a Firebase Console.
2. Crear un nuevo proyecto.
3. Agregar una aplicación web.
4. Copiar la configuración proporcionada.

---

## Configuración en environment.ts

```ts
firebaseConfig: {
  apiKey: "XXXX",
  authDomain: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX"
}
```

---

## Crear Firestore Database

Dentro de Firebase:

```txt
Build → Firestore Database → Create Database
```

Seleccionar:

```txt
Start in test mode
```

---

# 🟢 Configuración de Supabase

## Crear proyecto en Supabase

1. Crear un nuevo proyecto.
2. Obtener:

* Project URL
* anon public key

---

## Configuración en environment.ts

```ts
supabaseUrl: 'TU_URL',
supabaseKey: 'TU_ANON_KEY'
```

---

## Crear tabla ubicaciones

```sql
create table ubicaciones (

  id bigint generated always as identity primary key,

  latitud float,

  longitud float,

  fecha timestamp default now()

);
```

---

## Configurar Policies

```sql
alter table ubicaciones enable row level security;

create policy "permitir inserts"
on ubicaciones
for insert
to anon
with check (true);

create policy "permitir selects"
on ubicaciones
for select
to anon
using (true);
```

---

# 📍 Funcionalidades Implementadas

## Obtener ubicación actual

La aplicación solicita permisos de geolocalización y obtiene:

* Latitud
* Longitud

mediante Capacitor Geolocation.

---

## Seguimiento de ubicación

Se implementó watchPosition para actualizar las coordenadas en tiempo real.

---

## Guardado en Firebase

Cada ubicación obtenida se almacena en una colección llamada:

```txt
ubicaciones
```

---

## Guardado en Supabase

Las coordenadas también se almacenan en la tabla:

```txt
ubicaciones
```

---

## Apertura de Google Maps

La aplicación genera automáticamente un enlace hacia Google Maps utilizando las coordenadas actuales.

---

# 📱 Generación del APK

## Compilar aplicación

```bash
ionic build
```

---

## Sincronizar Capacitor

```bash
npx cap sync
```

---

## Abrir Android Studio

```bash
npx cap open android
```

---

## Generar APK

Dentro de Android Studio:

```txt
Build → Build APK(s)
```

---

# 📸 Evidencias



---

# ✅ Conclusiones

* Se logró implementar correctamente una aplicación móvil híbrida utilizando Ionic y Angular.
* La aplicación permitió obtener y registrar coordenadas geográficas utilizando Firebase y Supabase.
* Se implementó correctamente la integración con Google Maps para visualizar la ubicación actual.
* La aplicación fue compilada exitosamente como APK y ejecutada en un dispositivo móvil Android.
* Se comprobó el correcto funcionamiento del acceso a geolocalización y almacenamiento en la nube.

---

# 🚀 Resultado Final

Aplicación móvil funcional capaz de:

✅ Obtener ubicación GPS

✅ Registrar coordenadas en Firebase

✅ Registrar coordenadas en Supabase

✅ Abrir Google Maps automáticamente

✅ Ejecutarse correctamente mediante APK en Android
