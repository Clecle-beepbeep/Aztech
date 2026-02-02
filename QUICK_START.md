# 🚀 GUIDE RAPIDE - 5 minutes pour démarrer

## ⚡ En 3 étapes seulement

### 1️⃣ Créer le dépôt GitHub (1 min)
- Allez sur [github.com](https://github.com)
- Cliquez sur "New repository"
- Nom : `aztech-website`
- Public ✅
- Create!

### 2️⃣ Uploader les fichiers (2 min)
- Cliquez sur "uploading an existing file"
- Glissez TOUS les fichiers de ce dossier
- Commit changes

### 3️⃣ Activer GitHub Pages (2 min)
- Settings → Pages
- Source : **main**
- Save
- ✨ Votre site est en ligne !

---

## 🎯 Les 3 fichiers les plus importants

| Fichier | Pour quoi faire | Difficulté |
|---------|----------------|------------|
| `config.json` | Modifier les textes | ⭐ Facile |
| `images/` | Changer les images | ⭐⭐ Moyen |
| `styles.css` | Changer les couleurs | ⭐⭐⭐ Avancé |

---

## ✏️ Modifier un texte (30 secondes)

1. Ouvrir `config.json` sur GitHub
2. Cliquer sur ✏️ (Edit)
3. Changer le texte
4. Commit changes
5. ✅ Fait !

---

## 🖼️ Changer une image (2 minutes)

### Méthode ultra-simple :

1. **Préparer l'image**
   - Format : PNG avec fond transparent
   - Nom simple : `mon-logo.png` (pas d'espaces!)

2. **Uploader**
   - Aller dans le dossier `images/`
   - "Add file" → "Upload files"
   - Glisser l'image
   - Commit

3. **Utiliser dans le site**
   - Ouvrir `index.html`
   - Chercher (Ctrl+F) l'ancienne image
   - Remplacer par le nouveau nom
   ```html
   <img src="images/mon-logo.png">
   ```
   - Commit changes

### ⚠️ Règles d'or pour les images :

- ✅ Nom sans espaces : `nouveau-logo.png`
- ✅ Extension en minuscules : `.png` pas `.PNG`
- ✅ Toujours dans le dossier `images/`
- ✅ PNG pour transparence, JPG pour photos

---

## 🐛 Bug ? 3 solutions qui marchent toujours

### 1. L'image ne s'affiche pas
```html
<!-- Vérifier que le chemin commence par images/ -->
<img src="images/LOGO.png">  ✅
<img src="LOGO.png">  ❌
```

### 2. Les changements ne s'affichent pas
- Attendre 2-3 minutes
- Rafraîchir : **Ctrl + Shift + R**

### 3. Le site est cassé
- Télécharger la sauvegarde (Code → Download ZIP)
- Ré-uploader les fichiers originaux
- Refaire les modifications une par une

---

## 🎨 Personnalisations populaires

### Changer la couleur dorée
```css
/* Dans styles.css, ligne ~22 */
--gold: #d4af37;  /* Votre couleur ici */
```

### Changer le titre principal
```json
/* Dans config.json */
"hero": {
  "title": "VOTRE MARQUE"
}
```

### Changer le logo
1. Uploader `LOGO.png` dans images/
2. Ou changer le nom dans index.html

---

## 📱 Où voir le résultat ?

Votre site : `https://VOTRE-NOM-GITHUB.github.io/aztech-website/`

Exemple : si votre nom GitHub est `marie123` :
→ `https://marie123.github.io/aztech-website/`

---

## ⏱️ Combien de temps avant que ça marche ?

- **Première mise en ligne** : 2-5 minutes
- **Modifications après** : 1-2 minutes
- **Changements de CSS/JS** : Parfois besoin de vider le cache (Ctrl+Shift+R)

---

## 🆘 Aide rapide

| Problème | Solution |
|----------|----------|
| Image blanche | Exporter en PNG-24 transparent |
| Site pas en ligne | Settings → Pages → main ✅ |
| Changement invisible | Attendre 2 min + Ctrl+Shift+R |
| Fichier pas trouvé | Vérifier majuscules/minuscules |

---

## 📚 Pour aller plus loin

→ Lisez le `README.md` complet pour :
- Instructions détaillées
- Résolution de tous les problèmes
- Astuces de pro
- Optimisation des performances

---

**🎉 Félicitations ! Votre site est maintenant en ligne !**

*Pour toute question, relisez le README.md - toutes les réponses y sont !*
