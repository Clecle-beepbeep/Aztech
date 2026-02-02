# 🚀 Instructions de Déploiement GitHub Pages

## 📦 Contenu du Package

Ce package contient tout ce dont vous avez besoin pour mettre votre site en ligne :

### Fichiers Essentiels
- `index.html` - Page principale du site
- `styles.css` - Tous les styles et couleurs
- `script.js` - Animations et interactivité
- `config.json` - Configuration des textes (modifiable facilement)

### Dossiers
- `images/` - Toutes vos images (logos, bouteilles, étiquettes)

### Documentation
- `README.md` - Guide complet et détaillé
- `QUICK_START.md` - Démarrage rapide en 5 minutes
- `QUICK_EDITS.md` - Templates de modification rapide
- `TROUBLESHOOTING.md` - Solutions aux problèmes courants

### Fichiers Configuration
- `.gitignore` - Fichiers à ignorer par Git

---

## 🎯 Option 1 : Déploiement Simple (RECOMMANDÉ)

### Pour les débutants - Interface GitHub

**Étape 1 : Créer un compte GitHub (si pas encore fait)**
1. Allez sur [github.com](https://github.com)
2. Cliquez sur "Sign up"
3. Suivez les instructions

**Étape 2 : Créer un nouveau repository**
1. Une fois connecté, cliquez sur le bouton **"New"** (ou **"+"** → **"New repository"**)
2. Nom du repository : `aztech-website` (ou le nom que vous voulez)
3. Description (optionnel) : "Site web AZ'TECH Cerveza Artesanal"
4. Choisissez **"Public"**
5. **NE PAS** cocher "Add a README file"
6. Cliquez sur **"Create repository"**

**Étape 3 : Uploader les fichiers**
1. Sur la page de votre nouveau repository, vous verrez "Quick setup"
2. Cliquez sur **"uploading an existing file"**
3. Glissez-déposez **TOUS** les fichiers et dossiers de ce package :
   - Tous les fichiers .html, .css, .js, .json, .md
   - Le fichier `.gitignore`
   - Le dossier `images/` avec tout son contenu
4. En bas de la page, cliquez sur **"Commit changes"**
5. Attendez que l'upload se termine (barre de progression)

**Étape 4 : Activer GitHub Pages**
1. Dans votre repository, cliquez sur **"Settings"** (en haut à droite)
2. Dans le menu de gauche, cliquez sur **"Pages"**
3. Sous "Source", sélectionnez la branche **"main"**
4. Cliquez sur **"Save"**
5. GitHub va générer votre site (ça prend 2-5 minutes)
6. L'URL de votre site apparaîtra en haut en vert : `https://votre-username.github.io/aztech-website/`

**Étape 5 : Vérifier que ça marche**
1. Attendez 3-5 minutes (première mise en ligne)
2. Cliquez sur l'URL fournie ou allez sur : `https://VOTRE-USERNAME.github.io/NOM-DU-REPO/`
3. Votre site devrait s'afficher ! 🎉

---

## 💻 Option 2 : Déploiement avec Git (Pour utilisateurs avancés)

### Prérequis
- Git installé sur votre ordinateur
- Compte GitHub

### Commandes

```bash
# 1. Aller dans le dossier du projet
cd chemin/vers/aztech-project

# 2. Initialiser Git
git init

# 3. Ajouter tous les fichiers
git add .

# 4. Faire le premier commit
git commit -m "Initial commit - AZ'TECH website"

# 5. Renommer la branche en main
git branch -M main

# 6. Connecter au repository GitHub
# (Remplacez VOTRE-USERNAME et NOM-DU-REPO)
git remote add origin https://github.com/VOTRE-USERNAME/NOM-DU-REPO.git

# 7. Pousser sur GitHub
git push -u origin main
```

Ensuite, suivez l'Étape 4 de l'Option 1 pour activer GitHub Pages.

---

## 📝 Modifications Futures

### Pour modifier le site après la mise en ligne :

**Via l'interface GitHub (Simple)**
1. Allez sur votre repository
2. Cliquez sur le fichier à modifier
3. Cliquez sur l'icône crayon ✏️
4. Faites vos modifications
5. Cliquez sur "Commit changes"
6. Attendez 1-2 minutes pour voir les changements

**Via Git (Avancé)**
```bash
# 1. Faire vos modifications localement
# 2. Puis :
git add .
git commit -m "Description de vos changements"
git push
```

---

## 🌐 Domaine Personnalisé (Optionnel)

Si vous voulez utiliser votre propre nom de domaine (ex: www.aztech-beer.com) :

1. Achetez un nom de domaine (chez Namecheap, GoDaddy, OVH, etc.)
2. Dans GitHub : Settings → Pages → Custom domain
3. Entrez votre domaine
4. Chez votre registrar, configurez les DNS :
   - Type A : 185.199.108.153
   - Type A : 185.199.109.153
   - Type A : 185.199.110.153
   - Type A : 185.199.111.153
   - Type CNAME : www → votre-username.github.io

[Guide détaillé ici](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## ✅ Checklist Post-Déploiement

Après la mise en ligne, vérifiez :

- [ ] Le site est accessible à l'URL GitHub Pages
- [ ] Toutes les images se chargent correctement
- [ ] Le menu de navigation fonctionne
- [ ] Les animations fonctionnent (scroll, etc.)
- [ ] La bouteille 3D est interactive
- [ ] Le site est responsive (testez sur mobile)
- [ ] Pas d'erreurs dans la console (F12)

---

## 🔍 URLs Important à retenir

| Type | URL | Usage |
|------|-----|-------|
| **Site web** | `https://username.github.io/repo-name/` | Votre site en ligne |
| **Repository** | `https://github.com/username/repo-name` | Vos fichiers sur GitHub |
| **Settings** | `https://github.com/username/repo-name/settings` | Configuration |
| **Pages** | `https://github.com/username/repo-name/settings/pages` | Paramètres GitHub Pages |

---

## 🎨 Personnalisation Immédiate

Dès que votre site est en ligne, vous pouvez :

### 1. Changer les textes (2 minutes)
- Éditez `config.json` sur GitHub
- Changez les valeurs entre guillemets
- Commit changes
- Attendez 1-2 minutes

### 2. Changer les images (5 minutes)
- Préparez vos nouvelles images (PNG transparent)
- Uploadez dans `images/` sur GitHub
- Modifiez les références dans `index.html`
- Commit changes

### 3. Changer les couleurs (3 minutes)
- Ouvrez `styles.css` sur GitHub
- Cherchez `:root` (début du fichier)
- Changez les valeurs hexadécimales
- Commit changes

---

## 📊 Statistiques du Site

Une fois en ligne, vous pouvez voir les statistiques :

1. **Google Analytics** (gratuit) : Ajoutez le code de tracking dans `index.html`
2. **GitHub Insights** : Voir le trafic dans votre repository (Settings → Insights)

---

## 🛡️ Sécurité et Maintenance

### Ce qui est automatique :
- ✅ Hébergement gratuit et illimité
- ✅ SSL/HTTPS automatique (cadenas sécurisé)
- ✅ Mises à jour de sécurité GitHub
- ✅ Sauvegarde automatique des fichiers

### Ce que vous devez faire :
- 🔄 Garder une copie de sauvegarde locale
- 🔄 Tester après chaque modification
- 🔄 Mettre à jour les contenus régulièrement

---

## 🆘 Besoin d'Aide ?

### Documentation dans ce package :
1. **README.md** - Guide complet
2. **QUICK_START.md** - Démarrage rapide
3. **TROUBLESHOOTING.md** - Dépannage
4. **QUICK_EDITS.md** - Modifications rapides

### Ressources externes :
- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Guide HTML/CSS MDN](https://developer.mozilla.org/fr/)
- [Stack Overflow](https://stackoverflow.com) - Questions techniques

---

## 📞 Support

Si vous rencontrez un problème :

1. ✅ Consultez TROUBLESHOOTING.md
2. ✅ Vérifiez la console du navigateur (F12)
3. ✅ Comparez avec les fichiers originaux
4. ✅ Recherchez l'erreur sur Google/Stack Overflow
5. ✅ Revenez à une version qui fonctionnait

---

## 🎉 Félicitations !

Vous avez maintenant un site web professionnel en ligne, gratuit, et facile à modifier !

**Prochaines étapes :**
- [ ] Personnalisez les textes et images
- [ ] Partagez votre site sur les réseaux sociaux
- [ ] Ajoutez votre domaine personnalisé (optionnel)
- [ ] Configurez Google Analytics (optionnel)
- [ ] Faites des sauvegardes régulières

**L'URL de votre site :**
```
https://VOTRE-USERNAME.github.io/aztech-website/
```

---

**🍺 Bonne chance avec votre site AZ'TECH !**

*L'abus d'alcool est dangereux pour la santé, à consommer avec modération.*
