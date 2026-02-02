# 🔧 Guide de Dépannage - AZ'TECH

## 🆘 Les 5 problèmes les plus fréquents

### 1. ❌ L'image ne s'affiche pas

**Symptôme** : Vous voyez une icône cassée □ ou un espace vide à la place de l'image.

**Causes possibles** :
- ❌ Le nom du fichier ne correspond pas
- ❌ L'image n'est pas dans le bon dossier
- ❌ Le chemin dans le code est incorrect

**Solutions** :

#### Solution A : Vérifier le nom du fichier
```bash
# Sur GitHub, allez dans images/ et vérifiez :
LOGO.png  ✅ (majuscules)
logo.png  ❌ (minuscules - ne marchera pas si le code dit LOGO.png)
Logo.PNG  ❌ (extension en majuscule - ne marchera pas)
```

#### Solution B : Vérifier le chemin
```html
<!-- ✅ CORRECT -->
<img src="images/LOGO.png">

<!-- ❌ INCORRECT -->
<img src="LOGO.png">           <!-- Manque le dossier -->
<img src="/images/LOGO.png">   <!-- Slash au début - ne marche pas sur GitHub Pages -->
<img src="../images/LOGO.png"> <!-- Mauvais chemin relatif -->
```

#### Solution C : Vérifier que l'image existe
1. Sur GitHub, cliquez sur le dossier `images/`
2. Cherchez votre fichier dans la liste
3. Si absent → uploadez-le
4. Si présent → vérifiez l'orthographe exacte (majuscules/minuscules)

---

### 2. ⬜ L'image a un fond blanc au lieu d'être transparente

**Symptôme** : Votre logo ou image a un carré blanc autour alors qu'il devrait être transparent.

**Causes** :
- ❌ Image enregistrée en JPG (ne supporte pas la transparence)
- ❌ PNG-8 au lieu de PNG-24
- ❌ Transparence non activée lors de l'export

**Solutions** :

#### Solution 1 : Convertir en PNG-24
1. Ouvrez votre image dans un éditeur
2. **Photoshop** : File → Export → Save for Web → PNG-24 + Transparency ✅
3. **Canva** : Download → PNG + Transparent background ✅
4. **GIMP** : Export As → PNG + Save color values from transparent pixels ✅

#### Solution 2 : Utiliser remove.bg
1. Allez sur https://remove.bg
2. Uploadez votre image
3. Téléchargez le résultat (PNG transparent automatique)
4. Uploadez sur GitHub

#### Solution 3 : Méthode GitHub Issue (la plus fiable)
1. Dans votre dépôt, cliquez sur **Issues**
2. Cliquez sur **New Issue**
3. Glissez votre image PNG dans la zone de texte
4. GitHub l'héberge automatiquement avec transparence garantie
5. Copiez le lien généré : `https://user-images.githubusercontent.com/...`
6. Utilisez ce lien dans votre HTML

---

### 3. ⏳ Les changements ne s'affichent pas

**Symptôme** : Vous avez modifié du texte ou une image mais rien ne change sur le site.

**Causes** :
- ⏱️ GitHub Pages n'est pas encore à jour (1-3 minutes de délai)
- 🗃️ Votre navigateur utilise une version en cache

**Solutions** :

#### Solution A : Attendre et rafraîchir
```
1. Attendre 2-3 minutes après le commit
2. Vider le cache :
   - Windows : Ctrl + Shift + R
   - Mac : Cmd + Shift + R
   - Ou : Ctrl + F5
```

#### Solution B : Mode navigation privée
```
1. Ouvrez une fenêtre de navigation privée/incognito
2. Allez sur votre site
3. Si ça marche là → c'est un problème de cache
4. Solution : Videz le cache (Ctrl+Shift+R)
```

#### Solution C : Vérifier que le commit est bien passé
```
1. Sur GitHub, regardez l'historique (onglet Commits)
2. Votre dernier changement doit apparaître en haut
3. Si absent → Le commit n'a pas été enregistré, refaites-le
```

---

### 4. 🚫 Le site ne s'affiche pas du tout

**Symptôme** : Page blanche ou erreur 404 Not Found.

**Diagnostic complet** :

#### Étape 1 : Vérifier que GitHub Pages est activé
```
1. Settings → Pages
2. Source doit être sur "main" ✅
3. Le lien du site doit être affiché en vert
4. Si rien → Activez GitHub Pages et attendez 3-5 minutes
```

#### Étape 2 : Vérifier l'URL
```
Format correct :
https://votre-username.github.io/nom-du-depot/

Exemples :
✅ https://marie123.github.io/aztech-website/
❌ https://github.com/marie123/aztech-website/ (c'est l'URL du dépôt, pas du site)
```

#### Étape 3 : Vérifier le fichier index.html
```
1. Le fichier DOIT s'appeler exactement "index.html"
2. Pas "Index.html" ou "INDEX.html" ou "home.html"
3. Il doit être à la racine (pas dans un sous-dossier)
```

#### Étape 4 : Vérifier les erreurs
```
1. Ouvrez la Console du navigateur (F12)
2. Regardez s'il y a des erreurs en rouge
3. Notez les erreurs et vérifiez les fichiers concernés
```

---

### 5. 🎨 Le CSS/design ne fonctionne pas

**Symptôme** : Le site s'affiche mais sans mise en forme, tout est en noir et blanc basique.

**Causes** :
- ❌ Le fichier styles.css n'est pas uploadé
- ❌ Le lien vers styles.css est cassé
- ❌ Erreur de syntaxe dans le CSS

**Solutions** :

#### Solution A : Vérifier que styles.css existe
```
1. Sur GitHub, vérifiez que styles.css est dans la liste des fichiers
2. À la racine, même niveau que index.html
3. Si absent → Uploadez-le
```

#### Solution B : Vérifier le lien dans index.html
```html
<!-- Dans le <head> de index.html, doit avoir : -->
<link rel="stylesheet" href="styles.css">

<!-- Pas : -->
<link rel="stylesheet" href="/styles.css">  ❌
<link rel="stylesheet" href="css/styles.css">  ❌ (sauf si le fichier est vraiment dans un dossier css/)
```

#### Solution C : Vérifier les erreurs CSS
```
1. F12 → Onglet Console
2. Cherchez des erreurs liées à styles.css
3. Si "Failed to load resource" → Problème de chemin
4. Si "Unexpected token" → Erreur de syntaxe dans le CSS
```

---

## 📋 Checklist de débogage universelle

Quand quelque chose ne marche pas, suivez cette checklist :

### ✅ Étape 1 : Vérifications basiques
- [ ] J'ai attendu 2-3 minutes après mes modifications
- [ ] J'ai rafraîchi avec Ctrl+Shift+R (vider le cache)
- [ ] GitHub Pages est activé (Settings → Pages)
- [ ] Mon fichier s'appelle bien `index.html` (pas Index ou autre)

### ✅ Étape 2 : Vérifications fichiers
- [ ] Tous mes fichiers sont uploadés sur GitHub
- [ ] Les images sont dans le dossier `images/`
- [ ] Les noms de fichiers correspondent exactement (majuscules/minuscules)
- [ ] Pas d'espaces dans les noms de fichiers

### ✅ Étape 3 : Vérifications code
- [ ] Les chemins vers les images commencent par `images/`
- [ ] Le lien vers styles.css est `href="styles.css"`
- [ ] Le lien vers script.js est `src="script.js"`
- [ ] Pas de fautes de frappe dans les noms de fichiers

### ✅ Étape 4 : Console navigateur
- [ ] J'ai ouvert F12 pour voir les erreurs
- [ ] J'ai noté les messages d'erreur en rouge
- [ ] J'ai cherché les fichiers mentionnés dans les erreurs

---

## 🛠️ Outils de diagnostic

### Console du navigateur (F12)
```
Windows/Linux : F12
Mac : Cmd + Option + I

Onglets importants :
- Console : Erreurs JavaScript et chargement de fichiers
- Network : Fichiers chargés (voir si 404 = fichier manquant)
- Elements : Structure HTML en direct
```

### Test des chemins d'images
```
Pour tester si une image se charge :
1. Copiez l'URL de votre site
2. Ajoutez le chemin de l'image
3. Exemple : https://votre-site.github.io/aztech-website/images/LOGO.png
4. Si l'image s'affiche → Le chemin est correct
5. Si erreur 404 → Le fichier n'existe pas ou le nom est incorrect
```

---

## 💡 Astuces de prévention

### Avant de modifier quoi que ce soit :

1. **Télécharger une sauvegarde**
   ```
   Code → Download ZIP
   Gardez ce ZIP en sécurité
   ```

2. **Tester en local d'abord**
   ```
   Ouvrez index.html dans votre navigateur
   Vérifiez que tout fonctionne
   Seulement après → Uploadez sur GitHub
   ```

3. **Faire des commits clairs**
   ```
   ✅ "Remplacement du logo principal"
   ✅ "Mise à jour section contact"
   ❌ "update"
   ❌ "fix"
   
   Pourquoi ? Si ça casse, vous pouvez revenir en arrière facilement
   ```

4. **Modifier un fichier à la fois**
   ```
   Ne modifiez pas 5 fichiers en même temps
   Si ça casse, vous ne saurez pas lequel pose problème
   ```

---

## 📞 Quand rien ne marche

Si après tout ça, rien ne fonctionne :

### Option 1 : Recommencer from scratch
```
1. Téléchargez le projet original (celui qui marchait)
2. Créez un nouveau dépôt GitHub
3. Uploadez les fichiers originaux
4. Vérifiez que ça marche
5. Refaites vos modifications une par une
```

### Option 2 : Comparer avec l'original
```
1. Ouvrez votre fichier problématique
2. Ouvrez le fichier original à côté
3. Comparez ligne par ligne
4. Trouvez ce qui est différent
5. Corrigez ou revenez à l'original
```

### Option 3 : Utiliser l'historique GitHub
```
1. Allez dans l'historique des commits
2. Trouvez le dernier commit où ça marchait
3. Cliquez sur "Browse files" à ce commit
4. Téléchargez cette version
5. Réuploadez-la
```

---

## 📚 Ressources supplémentaires

- **Documentation GitHub Pages** : https://pages.github.com
- **Validator HTML** : https://validator.w3.org
- **Remove.bg** (enlever fonds) : https://remove.bg
- **TinyPNG** (optimiser images) : https://tinypng.com

---

**💪 Ne vous découragez pas !**

Le débogage fait partie du processus. Chaque problème résolu vous rend plus compétent. Gardez ce guide sous la main et suivez les étapes méthodiquement.

*Bon courage !*
