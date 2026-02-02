# ⚡ Modifications Rapides - Copier-Coller

Ce fichier contient des templates prêts à l'emploi pour les modifications les plus courantes.

---

## 📝 Modifier les textes (config.json)

### Changer le titre principal
```json
"hero": {
  "title": "VOTRE NOUVEAU TITRE ICI"
}
```

### Changer le slogan
```json
"hero": {
  "subtitle": "Votre nouveau slogan"
}
```

### Changer la description
```json
"hero": {
  "description": "Votre nouvelle description ici.<br>Utilisez <br> pour les sauts de ligne."
}
```

### Changer le nom du produit
```json
"product": {
  "name": "NOUVEAU NOM",
  "tagline": "Votre nouvelle signature",
  "alcohol": "X,X% vol",
  "volume": "XXcl"
}
```

### Changer les coordonnées
```json
"contact": {
  "email": "votre@email.com",
  "phone": "+33 X XX XX XX XX",
  "social": {
    "instagram": "@votre_compte",
    "facebook": "VotrePageFacebook"
  }
}
```

### Changer les informations entreprise
```json
"company": {
  "name": "Nom de votre entreprise",
  "address": "Adresse complète",
  "postal_code": "Code postal",
  "city": "Ville",
  "country": "Pays"
}
```

---

## 🖼️ Modifier les images (index.html)

### Changer le logo principal
```html
<!-- Trouvez cette ligne et changez LOGO.png par votre nouveau fichier -->
<img src="images/VOTRE-NOUVEAU-LOGO.png" alt="Logo">
```

### Changer l'image de la bouteille
```html
<!-- Section produit -->
<img src="images/VOTRE-BOUTEILLE.png" alt="Bouteille" class="bottle-img">
```

### Changer les images de la galerie
```html
<!-- Étiquette avant -->
<img src="images/VOTRE-ETIQUETTE-AVANT.png" alt="Étiquette avant" class="gallery-img">

<!-- Étiquette arrière -->
<img src="images/VOTRE-ETIQUETTE-ARRIERE.png" alt="Étiquette arrière" class="gallery-img">

<!-- Packaging -->
<img src="images/VOTRE-PACKAGING.png" alt="Packaging" class="gallery-img">
```

### Ajouter une nouvelle image
```html
<img src="images/nom-de-votre-image.png" alt="Description de l'image">
```

---

## 🎨 Changer les couleurs (styles.css)

### Couleur principale (or)
```css
:root {
    --gold: #XXXXXX;        /* Votre code couleur hexadécimal */
    --gold-light: #XXXXXX;  /* Version plus claire */
    --gold-dark: #XXXXXX;   /* Version plus foncée */
}
```

### Fond sombre
```css
:root {
    --dark: #XXXXXX;    /* Couleur de fond principale */
    --darker: #XXXXXX;  /* Version encore plus sombre */
}
```

### Couleur du texte
```css
:root {
    --light: #XXXXXX;   /* Couleur du texte clair */
    --cream: #XXXXXX;   /* Couleur crème/beige */
}
```

### Exemples de codes couleurs populaires
```css
/* Doré classique */
--gold: #d4af37;

/* Or rose */
--gold: #b76e79;

/* Cuivre */
--gold: #b87333;

/* Bronze */
--gold: #cd7f32;

/* Argent */
--gold: #c0c0c0;

/* Bleu nuit */
--dark: #0a0e27;

/* Noir profond */
--dark: #0a0806;

/* Gris foncé */
--dark: #1a1a1a;
```

---

## 🔗 Ajouter des liens

### Lien externe (site web)
```html
<a href="https://www.votre-site.com" target="_blank">Texte du lien</a>
```

### Lien email
```html
<a href="mailto:votre@email.com">Contactez-nous</a>
```

### Lien téléphone
```html
<a href="tel:+33123456789">01 23 45 67 89</a>
```

### Lien réseaux sociaux
```html
<!-- Instagram -->
<a href="https://instagram.com/votre_compte" target="_blank">Instagram</a>

<!-- Facebook -->
<a href="https://facebook.com/votrepage" target="_blank">Facebook</a>

<!-- Twitter/X -->
<a href="https://twitter.com/votre_compte" target="_blank">Twitter</a>
```

---

## 📄 Ajouter une nouvelle section

### Template de section simple
```html
<section class="votre-section" id="votre-ancre">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Titre de la Section</h2>
            <div class="section-divider"></div>
            <p class="section-subtitle">Sous-titre optionnel</p>
        </div>

        <div class="section-content">
            <p>Votre contenu ici...</p>
        </div>
    </div>
</section>
```

### Template avec 2 colonnes
```html
<section class="votre-section">
    <div class="container">
        <div class="two-columns">
            <div class="column">
                <h3>Colonne gauche</h3>
                <p>Contenu...</p>
            </div>
            <div class="column">
                <h3>Colonne droite</h3>
                <p>Contenu...</p>
            </div>
        </div>
    </div>
</section>
```

---

## 🔘 Ajouter des boutons

### Bouton principal
```html
<a href="#votre-lien" class="btn-primary">Texte du bouton</a>
```

### Bouton secondaire
```html
<a href="#votre-lien" class="btn-secondary">Texte du bouton</a>
```

### Bouton CTA (Call-to-Action)
```html
<a href="#contact" class="cta-button">Contactez-nous</a>
```

### Groupe de boutons
```html
<div class="button-group">
    <a href="#" class="btn-primary">Bouton 1</a>
    <a href="#" class="btn-secondary">Bouton 2</a>
</div>
```

---

## 📱 Ajouter des icônes

### Méthode 1 : Émojis (simple)
```html
<span class="icon">🍺</span> Bière artisanale
<span class="icon">🌶️</span> Saveurs épicées
<span class="icon">🌾</span> Sans gluten
<span class="icon">📧</span> Email
<span class="icon">📞</span> Téléphone
<span class="icon">📍</span> Adresse
```

### Méthode 2 : Font Awesome (avancé)
```html
<!-- 1. Ajoutez ça dans le <head> de index.html -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- 2. Utilisez les icônes comme ça : -->
<i class="fas fa-beer"></i> Bière
<i class="fas fa-leaf"></i> Sans gluten
<i class="fas fa-envelope"></i> Email
<i class="fas fa-phone"></i> Téléphone
<i class="fab fa-instagram"></i> Instagram
<i class="fab fa-facebook"></i> Facebook
```

---

## 🎯 Checklist avant upload

Avant d'uploader vos modifications sur GitHub, vérifiez :

- [ ] Les noms de fichiers n'ont pas d'espaces (utilisez `-` ou `_`)
- [ ] Les extensions sont en minuscules (`.png` pas `.PNG`)
- [ ] Les images sont dans le dossier `images/`
- [ ] Les chemins commencent par `images/` (pas `/images/`)
- [ ] Vous avez testé en local (ouvrir index.html dans le navigateur)
- [ ] Les guillemets sont bien fermés `"` et `"`
- [ ] Les balises HTML sont bien fermées `<div>` ... `</div>`
- [ ] Pas de fautes de frappe dans les noms de fichiers

---

## 💡 Astuces de pro

### Optimiser les images avant upload
```
1. Allez sur https://tinypng.com
2. Uploadez votre image
3. Téléchargez la version optimisée
4. Uploadez sur GitHub

Résultat : Images plus légères = site plus rapide
```

### Tester les couleurs
```
1. Allez sur https://coolors.co
2. Générez des palettes de couleurs
3. Copiez les codes hexadécimaux
4. Collez dans styles.css

Ou utilisez :
- https://htmlcolorcodes.com
- https://color.adobe.com
```

### Vérifier que le HTML est valide
```
1. Allez sur https://validator.w3.org
2. Collez votre URL GitHub Pages
3. Vérifiez les erreurs
4. Corrigez si nécessaire
```

---

## 🎬 Séquence de modification type

### Pour changer une image :
```
1. ✅ Préparez l'image (PNG transparent, nom simple)
2. ✅ Uploadez dans images/ sur GitHub
3. ✅ Notez le nom exact du fichier
4. ✅ Modifiez index.html avec le nouveau nom
5. ✅ Commit changes
6. ✅ Attendez 2 minutes
7. ✅ Ctrl+Shift+R pour rafraîchir
```

### Pour changer un texte :
```
1. ✅ Ouvrez config.json sur GitHub
2. ✅ Cliquez sur le crayon pour éditer
3. ✅ Trouvez la ligne à modifier
4. ✅ Changez le texte entre les guillemets "..."
5. ✅ Commit changes
6. ✅ Attendez 1-2 minutes
7. ✅ Rafraîchissez votre site
```

---

## 📖 Lexique rapide

**Commit** : Enregistrer vos modifications sur GitHub
**Repository (repo)** : Votre projet sur GitHub
**GitHub Pages** : Votre site web hébergé gratuitement
**index.html** : La page d'accueil de votre site (obligatoire)
**styles.css** : Le fichier contenant tous les styles/couleurs
**script.js** : Le fichier contenant les animations et interactions
**config.json** : Le fichier de configuration avec tous les textes

---

**🎉 Vous êtes maintenant prêt à personnaliser votre site !**

N'oubliez pas :
- Commencez petit (une modification à la fois)
- Testez après chaque changement
- Gardez toujours une sauvegarde
- Consultez TROUBLESHOOTING.md si problème

*Bonne personnalisation !*
