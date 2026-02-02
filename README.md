# 🍺 AZ'TECH - Cerveza Artesanal

Site web pour la bière artisanale sans gluten AZ'TECH aux saveurs mexicaines.

![AZ'TECH Logo](images/LOGO.png)

## 📋 Table des matières

- [Installation sur GitHub Pages](#installation-sur-github-pages)
- [Comment modifier les textes](#comment-modifier-les-textes)
- [Comment modifier les images](#comment-modifier-les-images)
- [Structure du projet](#structure-du-projet)
- [Résolution des problèmes](#résolution-des-problèmes)

---

## 🚀 Installation sur GitHub Pages

### Étape 1 : Créer un dépôt GitHub

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"New"** (ou **"Nouveau"**) pour créer un nouveau repository
3. Nommez-le : `aztech-website` (ou le nom de votre choix)
4. Cochez **"Public"**
5. **NE PAS** cocher "Add a README file"
6. Cliquez sur **"Create repository"**

### Étape 2 : Uploader vos fichiers

**Option A - Via l'interface GitHub (RECOMMANDÉ pour débutants)**

1. Sur la page de votre nouveau dépôt, cliquez sur **"uploading an existing file"**
2. Glissez-déposez TOUS les fichiers et dossiers de ce projet :
   - `index.html`
   - `styles.css`
   - `script.js`
   - `config.json`
   - Le dossier `images/` avec toutes les images
3. Cliquez sur **"Commit changes"**

**Option B - Via Git (pour utilisateurs avancés)**

```bash
git init
git add .
git commit -m "Initial commit - AZ'TECH website"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/aztech-website.git
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Dans votre dépôt, allez dans **Settings** (Paramètres)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous "Source", sélectionnez **main** comme branche
4. Cliquez sur **Save**
5. Attendez 2-3 minutes
6. Votre site sera accessible à : `https://VOTRE-USERNAME.github.io/aztech-website/`

---

## ✏️ Comment modifier les textes

### Méthode 1 : Modifier le fichier config.json (RECOMMANDÉ)

Le fichier `config.json` contient tous les textes modifiables du site. C'est le moyen le plus simple pour changer les textes !

1. Allez sur GitHub dans votre dépôt
2. Cliquez sur le fichier `config.json`
3. Cliquez sur l'icône crayon ✏️ (Edit)
4. Modifiez les textes que vous voulez :

```json
{
  "hero": {
    "badge": "Cerveza Artesanal Premium",
    "title": "AZ'TECH",
    "subtitle": "Cerveza Artesanal",
    "description": "Votre nouveau texte ici..."
  },
  "product": {
    "name": "CALIENTE",
    "alcohol": "7,5% vol",
    ...
  }
}
```

5. Cliquez sur **"Commit changes"**
6. Attendez 1-2 minutes pour voir les changements sur votre site

### Méthode 2 : Modifier directement index.html

Pour des modifications plus avancées :

1. Cliquez sur `index.html`
2. Cliquez sur l'icône crayon ✏️
3. Trouvez le texte à modifier (utilisez Ctrl+F)
4. Modifiez le texte
5. Cliquez sur **"Commit changes"**

---

## 🖼️ Comment modifier les images

### ⚠️ IMPORTANT : Méthode "Zéro Code" pour éviter les bugs

**Pourquoi cette méthode ?**
- Les images en Base64 sont lourdes et peuvent causer des bugs d'affichage
- GitHub héberge vos images gratuitement et de manière fiable
- La transparence des PNG est garantie à 100%

### Étape par étape :

#### 1. Préparer vos images

Avant d'uploader une image sur GitHub :

- **Format recommandé** : PNG-24 avec transparence
- **Outils gratuits** :
  - [remove.bg](https://remove.bg) - Pour enlever l'arrière-plan
  - [Canva](https://canva.com) - Pour éditer et exporter en PNG
  - Photoshop - Si vous l'avez
  
**Lors de l'export :**
- Cochez TOUJOURS "Transparency" (Transparence)
- Choisissez PNG-24 (pas PNG-8)
- Évitez le JPG pour les logos

#### 2. Uploader sur GitHub

**Option A : Via l'interface GitHub (SIMPLE)**

1. Allez dans votre dépôt GitHub
2. Cliquez sur le dossier `images/`
3. Cliquez sur **"Add file"** → **"Upload files"**
4. Glissez-déposez votre nouvelle image
5. Donnez-lui un nom simple (ex: `nouveau-logo.png`)
6. Cliquez sur **"Commit changes"**

**Option B : Via une Issue GitHub (POUR LIENS DIRECTS)**

Cette méthode est parfaite car GitHub héberge automatiquement votre image :

1. Dans votre dépôt, allez dans **Issues**
2. Cliquez sur **"New Issue"**
3. Dans la zone de texte, glissez-déposez votre image
4. GitHub va automatiquement uploader l'image et vous donner un lien comme :
   ```
   https://user-images.githubusercontent.com/123456/votre-image.png
   ```
5. **COPIEZ CE LIEN** - c'est votre lien d'hébergement permanent
6. Vous pouvez fermer l'issue sans la publier

#### 3. Utiliser votre nouvelle image dans le code

Une fois uploadée, modifiez le fichier HTML :

1. Ouvrez `index.html` dans GitHub
2. Trouvez la ligne avec l'ancienne image (Ctrl+F)
3. Remplacez le chemin :

**Si l'image est dans le dossier images/ :**
```html
<!-- AVANT -->
<img src="images/LOGO.png" alt="Logo">

<!-- APRÈS -->
<img src="images/nouveau-logo.png" alt="Logo">
```

**Si vous utilisez un lien GitHub (de l'Issue) :**
```html
<img src="https://user-images.githubusercontent.com/123456/votre-image.png" alt="Logo">
```

4. Cliquez sur **"Commit changes"**

### Images à remplacer fréquemment :

| Image actuelle | Où elle apparaît | Comment la remplacer |
|---|---|---|
| `LOGO.png` | Navigation, footer | Uploadez dans `images/` avec le même nom |
| `bottle_Prototype.png` | Section produit | Uploadez dans `images/` |
| `Face_stickers_bottle.png` | Galerie produit | Uploadez dans `images/` |
| `health_warning.png` | Footer | Uploadez dans `images/` |

### 🎨 Conseils pour les images :

- **Logo** : Fond transparent, minimum 500x500px
- **Photos de bouteille** : Fond transparent ou noir, minimum 800x1200px
- **Étiquettes** : Haute résolution, minimum 1000x1400px
- **Images de fond** : JPG acceptable, 1920x1080px minimum

---

## 📁 Structure du projet

```
aztech-website/
│
├── index.html          # Page principale du site
├── styles.css          # Tous les styles CSS
├── script.js           # Toutes les animations JavaScript
├── config.json         # 📝 Fichier pour modifier les textes facilement
├── README.md           # Ce guide
│
└── images/             # 🖼️ Toutes les images
    ├── LOGO.png
    ├── bottle_Prototype.png
    ├── Face_stickers_bottle.png
    ├── back_stickers_bottle.png
    ├── packaging_bottle.png
    └── health_warning.png
```

---

## 🔧 Résolution des problèmes

### ❌ "Mon image n'apparaît pas"

**Solutions :**

1. **Vérifiez le chemin du fichier**
   ```html
   <!-- ✅ CORRECT -->
   <img src="images/LOGO.png">
   
   <!-- ❌ INCORRECT -->
   <img src="LOGO.png">
   <img src="/images/LOGO.png">
   ```

2. **Vérifiez le nom du fichier**
   - GitHub est sensible à la casse : `LOGO.png` ≠ `logo.png`
   - Pas d'espaces dans les noms : utilisez `mon-image.png` pas `mon image.png`

3. **Vérifiez que l'image est bien uploadée**
   - Allez dans le dossier `images/` sur GitHub
   - Cliquez sur l'image pour vérifier qu'elle s'affiche

### ❌ "Mon image a un fond blanc au lieu d'être transparente"

**Solutions :**

1. Réexportez votre image en PNG-24 avec transparence activée
2. Utilisez [remove.bg](https://remove.bg) pour enlever le fond
3. Uploadez via une Issue GitHub (méthode recommandée plus haut)

### ❌ "Les changements ne s'affichent pas sur mon site"

**Solutions :**

1. **Attendez 2-3 minutes** - GitHub Pages met du temps à se mettre à jour
2. **Videz le cache de votre navigateur** :
   - Chrome/Edge : Ctrl + Shift + R (Windows) ou Cmd + Shift + R (Mac)
   - Firefox : Ctrl + F5 (Windows) ou Cmd + Shift + R (Mac)
3. Vérifiez que vos changements sont bien dans le dépôt GitHub

### ❌ "Je ne trouve pas où modifier un texte"

1. Vérifiez d'abord `config.json` - la plupart des textes y sont
2. Si ce n'est pas dans config.json, ouvrez `index.html`
3. Utilisez la recherche (Ctrl+F) pour trouver le texte exact

### ❌ "Le site ne s'affiche pas du tout"

1. Vérifiez que GitHub Pages est bien activé :
   - Settings → Pages → Source doit être sur "main"
2. Attendez 3-5 minutes après la première activation
3. Vérifiez l'URL : `https://VOTRE-USERNAME.github.io/nom-du-depot/`
4. Assurez-vous que le fichier s'appelle bien `index.html` (pas `Index.html`)

---

## 🎯 Modifications rapides

### Changer le titre principal

```json
// Dans config.json
"hero": {
  "title": "VOTRE NOUVEAU TITRE"
}
```

### Changer le logo

1. Uploadez votre nouveau logo dans `images/`
2. Nommez-le `LOGO.png` (pour remplacer l'ancien)
3. OU changez le nom dans index.html :
```html
<img src="images/VOTRE-NOUVEAU-LOGO.png">
```

### Changer les couleurs

Dans `styles.css`, cherchez `:root` au début et modifiez :

```css
:root {
    --gold: #d4af37;          /* Couleur dorée principale */
    --gold-light: #ffd700;    /* Or clair */
    --gold-dark: #b8992f;     /* Or foncé */
    --dark: #0a0806;          /* Fond sombre */
    --light: #f5e6d3;         /* Texte clair */
}
```

### Changer les informations de contact

```json
// Dans config.json
"contact": {
  "email": "votre@email.com",
  "phone": "+33 X XX XX XX XX"
}
```

---

## 💡 Astuces Pro

### 1. Tester avant de publier

Ouvrez simplement `index.html` dans votre navigateur local avant de l'uploader sur GitHub.

### 2. Faire des sauvegardes

Avant de faire des changements importants :
1. Cliquez sur **"Code"** → **"Download ZIP"**
2. Gardez une copie de sauvegarde

### 3. Utiliser les Commits intelligemment

Donnez des messages clairs quand vous faites des changements :
- ✅ "Changement du logo principal"
- ✅ "Mise à jour des informations de contact"
- ❌ "update"
- ❌ "change"

### 4. Optimiser les images

Avant d'uploader, compressez vos images avec :
- [TinyPNG](https://tinypng.com) - Compression sans perte de qualité
- [Squoosh](https://squoosh.app) - Outil Google pour optimiser

---

## 📞 Besoin d'aide ?

Si vous rencontrez un problème :

1. Vérifiez cette section "Résolution des problèmes"
2. Vérifiez que tous vos fichiers sont bien uploadés sur GitHub
3. Vérifiez la console du navigateur (F12) pour voir les erreurs
4. Comparez avec le fichier original pour voir ce qui a changé

---

## 🌟 Fonctionnalités du site

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations fluides au scroll
- ✅ Bouteille 3D interactive (Three.js)
- ✅ Particules animées en arrière-plan
- ✅ Navigation sticky avec effet au scroll
- ✅ Optimisé pour les performances
- ✅ Compatible tous navigateurs modernes

---

## 📄 Licence

Ce projet est un projet étudiant pour l'IUT de Montpellier - BUT TC.

---

**Créé avec ❤️ pour AZ'TECH Cerveza Artesanal**

*L'abus d'alcool est dangereux pour la santé, à consommer avec modération.*
