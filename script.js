


        // ======================
        // CHARGEMENT DES IMAGES
        // ======================
        console.log('🔄 Chargement des ressources...');
        
        // Assigner directement les images depuis les données base64
        setTimeout(() => {
            // Logo
            if (document.getElementById('loader-logo')) {
                document.getElementById('loader-logo').src = IMAGES_DATA.logo;
                console.log('✓ Logo (loading) chargé');
            }
            if (document.getElementById('nav-logo')) {
                document.getElementById('nav-logo').src = IMAGES_DATA.logo;
                console.log('✓ Logo (navigation) chargé');
            }
            if (document.getElementById('footer-logo')) {
                document.getElementById('footer-logo').src = IMAGES_DATA.logo;
                console.log('✓ Logo (footer) chargé');
            }
            
            // Produits
            if (document.getElementById('product-75cl')) {
                document.getElementById('product-75cl').src = IMAGES_DATA.bottle75;
                console.log('✓ Bouteille 75cl principale chargée');
            }
            if (document.getElementById('product-single')) {
                document.getElementById('product-single').src = IMAGES_DATA.bottle75;
                console.log('✓ Bouteille 75cl secondaire chargée');
            }
            if (document.getElementById('product-pack')) {
                document.getElementById('product-pack').src = IMAGES_DATA.packaging;
                console.log('✓ Pack découverte chargé');
            }
            
            // Labels
            if (document.getElementById('label-back')) {
                document.getElementById('label-back').src = IMAGES_DATA.labelBack;
                console.log('✓ Étiquette arrière chargée');
            }
            
            console.log('✅ Toutes les images sont chargées avec succès!');
        }, 100);

        // ======================
        // LOADING SCREEN
        // ======================
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loading-screen').classList.add('hidden');
            }, 800);
        });

        // ======================
        // PARTICLES BACKGROUND
        // ======================
        const particlesCanvas = document.getElementById('particles-canvas');
        const ctx = particlesCanvas.getContext('2d');
        particlesCanvas.width = window.innerWidth;
        particlesCanvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 80;

        class Particle {
            constructor() {
                this.x = Math.random() * particlesCanvas.width;
                this.y = Math.random() * particlesCanvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > particlesCanvas.width) this.x = 0;
                if (this.x < 0) this.x = particlesCanvas.width;
                if (this.y > particlesCanvas.height) this.y = 0;
                if (this.y < 0) this.y = particlesCanvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        animateParticles();

        window.addEventListener('resize', () => {
            particlesCanvas.width = window.innerWidth;
            particlesCanvas.height = window.innerHeight;
        });

        // ======================
        // NAVBAR SCROLL
        // ======================
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // ======================
        // SCROLL ANIMATIONS
        // ======================
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
            observer.observe(el);
        });

        // ======================
        // THREE.JS 3D BOTTLE
        // ======================
        const container = document.getElementById('three-container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);

        // LIGHTING
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xd4af37, 1.2);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        const pointLight1 = new THREE.PointLight(0xffd700, 0.8);
        pointLight1.position.set(-5, 5, 0);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xd4af37, 0.6);
        pointLight2.position.set(0, -3, 5);
        scene.add(pointLight2);

        // CREATE BOTTLE GROUP
        const bottleGroup = new THREE.Group();

        // Bottle body (cylinder avec texture réaliste)
        const bodyGeometry = new THREE.CylinderGeometry(0.8, 0.9, 4, 32);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0x3d2817,
            shininess: 90,
            transparent: true,
            opacity: 0.88,
            specular: 0x444444,
            reflectivity: 0.5
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.castShadow = true;
        body.receiveShadow = true;
        bottleGroup.add(body);

        // Bottle neck
        const neckGeometry = new THREE.CylinderGeometry(0.35, 0.8, 1.5, 32);
        const neck = new THREE.Mesh(neckGeometry, bodyMaterial);
        neck.position.y = 2.75;
        neck.castShadow = true;
        bottleGroup.add(neck);

        // Bottle cap
        const capGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 32);
        const capMaterial = new THREE.MeshStandardMaterial({
            color: 0xd4af37,
            metalness: 0.9,
            roughness: 0.1,
            emissive: 0xd4af37,
            emissiveIntensity: 0.2
        });
        const cap = new THREE.Mesh(capGeometry, capMaterial);
        cap.position.y = 3.65;
        cap.castShadow = true;
        bottleGroup.add(cap);

        // Label (plane avec couleur dorée)
        const labelGeometry = new THREE.PlaneGeometry(1.6, 2.2);
        const labelMaterial = new THREE.MeshStandardMaterial({
            color: 0xf5e6d3,
            emissive: 0xd4af37,
            emissiveIntensity: 0.3,
            metalness: 0.4,
            roughness: 0.6
        });
        const labelFront = new THREE.Mesh(labelGeometry, labelMaterial);
        labelFront.position.z = 0.81;
        bottleGroup.add(labelFront);

        // Back label
        const labelBack = new THREE.Mesh(labelGeometry, labelMaterial);
        labelBack.position.z = -0.81;
        labelBack.rotation.y = Math.PI;
        bottleGroup.add(labelBack);

        // Reflets sur la bouteille
        const highlightGeometry = new THREE.CylinderGeometry(0.81, 0.91, 4, 32);
        const highlightMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.15,
            side: THREE.FrontSide
        });
        const highlight = new THREE.Mesh(highlightGeometry, highlightMaterial);
        highlight.position.x = 0.3;
        bottleGroup.add(highlight);

        scene.add(bottleGroup);
        camera.position.z = 8;
        camera.position.y = 0.5;

        // CONTROLS
        let isDragging = false;
        let previousMouseX = 0;
        let rotationY = 0;
        let autoRotate = true;
        let zoomLevel = 8;

        container.addEventListener('mousedown', (e) => {
            isDragging = true;
            autoRotate = false;
            previousMouseX = e.clientX;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - previousMouseX;
            rotationY += deltaX * 0.01;
            previousMouseX = e.clientX;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Touch support
        container.addEventListener('touchstart', (e) => {
            isDragging = true;
            autoRotate = false;
            previousMouseX = e.touches[0].clientX;
        });

        container.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const deltaX = e.touches[0].clientX - previousMouseX;
            rotationY += deltaX * 0.01;
            previousMouseX = e.touches[0].clientX;
            e.preventDefault();
        });

        container.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Control buttons
        document.getElementById('reset-view').addEventListener('click', () => {
            rotationY = 0;
            zoomLevel = 8;
            autoRotate = true;
        });

        document.getElementById('zoom-in').addEventListener('click', () => {
            zoomLevel = Math.max(5, zoomLevel - 0.5);
        });

        document.getElementById('zoom-out').addEventListener('click', () => {
            zoomLevel = Math.min(12, zoomLevel + 0.5);
        });

        // ANIMATION LOOP
        function animate() {
            requestAnimationFrame(animate);

            if (autoRotate && !isDragging) {
                rotationY += 0.005;
            }

            bottleGroup.rotation.y = rotationY;
            bottleGroup.rotation.x = Math.sin(Date.now() * 0.001) * 0.05;

            // Smooth zoom
            camera.position.z += (zoomLevel - camera.position.z) * 0.1;

            // Animate lights
            pointLight1.position.x = Math.sin(Date.now() * 0.001) * 3;
            pointLight2.position.z = Math.cos(Date.now() * 0.0008) * 3;

            renderer.render(scene, camera);
        }

        animate();

        // Handle resize
        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });

        // ======================
        // SMOOTH SCROLL
        // ======================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
       
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        });

// ================================
// BULLES AU SCROLL
// ================================
(function() {
    let lastScrollY = 0;
    const scrollBubblesContainer = document.getElementById('scrollBubbles');
    if (!scrollBubblesContainer) return;
    
    function createScrollBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('scroll-bubble');
        
        // Taille aléatoire entre 15 et 60px
        const size = Math.random() * 45 + 15;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        
        // Position horizontale aléatoire
        bubble.style.left = Math.random() * 100 + '%';
        
        // Dérive horizontale aléatoire
        const drift = (Math.random() - 0.5) * 150;
        bubble.style.setProperty('--drift', drift + 'px');
        
        scrollBubblesContainer.appendChild(bubble);
        
        // Supprimer après l'animation
        setTimeout(() => {
            bubble.remove();
        }, 4000);
    }
    
    let bubbleTimeout;
    let scrollThrottle;
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollThrottle);
        scrollThrottle = setTimeout(() => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down - create bubbles
                clearTimeout(bubbleTimeout);
                
                // Créer 4-6 bulles
                const numBubbles = Math.floor(Math.random() * 3) + 4;
                for (let i = 0; i < numBubbles; i++) {
                    setTimeout(() => createScrollBubble(), i * 80);
                }
            }
            
            lastScrollY = currentScrollY;
        }, 50);
    });
})();


// ================================
// SECTION LA BIÈRE - MODÈLE 3D GLB
// ================================
(function() {
    const container = document.getElementById('labiere3d');
    if (!container) {
        console.log('Conteneur 3D non trouvé');
        return;
    }
    
    console.log('Initialisation modèle 3D...');
    
    // Configuration Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        50,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
    });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    
    // Lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0xd4af37, 1.5);
    directionalLight1.position.set(5, 5, 5);
    directionalLight1.castShadow = true;
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0xffd700, 1);
    directionalLight2.position.set(-5, 3, -2);
    scene.add(directionalLight2);
    
    const pointLight = new THREE.PointLight(0xffd700, 1.2);
    pointLight.position.set(0, 5, 3);
    scene.add(pointLight);
    
    camera.position.set(0, 1, 4);
    camera.lookAt(0, 0, 0);
    
    // Variables de contrôle
    let model = null;
    let isDragging = false;
    let previousMouseX = 0;
    let rotationY = 0;
    let autoRotate = true;
    
    // Charger le modèle GLB
    const loader = new THREE.GLTFLoader();
    
    console.log('Chargement du fichier GLB...');
    
    loader.load(
        'images/bouteille.glb',
        function(gltf) {
            console.log('Modèle GLB chargé avec succès');
            model = gltf.scene;
            
            // Ajuster la taille et position
            model.scale.set(1.5, 1.5, 1.5);
            model.position.set(0, -1, 0);
            
            scene.add(model);
            
            // Cacher le loader
            const loading = container.querySelector('.loading-3d');
            if (loading) {
                loading.style.display = 'none';
            }
            
            console.log('Modèle 3D ajouté à la scène');
        },
        function(xhr) {
            const percent = (xhr.loaded / xhr.total * 100);
            console.log(percent.toFixed(2) + '% chargé');
        },
        function(error) {
            console.error('Erreur chargement GLB:', error);
            const loading = container.querySelector('.loading-3d');
            if (loading) {
                loading.innerHTML = '<p style="color: var(--red);">❌ Erreur de chargement du modèle 3D</p>';
            }
        }
    );
    
    // Contrôles souris
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        autoRotate = false;
        previousMouseX = e.clientX;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - previousMouseX;
        rotationY += deltaX * 0.01;
        previousMouseX = e.clientX;
    });
    
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            setTimeout(() => {
                autoRotate = true;
            }, 2000);
        }
    });
    
    // Support tactile
    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        autoRotate = false;
        previousMouseX = e.touches[0].clientX;
        e.preventDefault();
    });
    
    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - previousMouseX;
        rotationY += deltaX * 0.01;
        previousMouseX = e.touches[0].clientX;
        e.preventDefault();
    });
    
    container.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
            setTimeout(() => {
                autoRotate = true;
            }, 2000);
        }
    });
    
    // Animation
    function animate() {
        requestAnimationFrame(animate);
        
        if (model) {
            if (autoRotate) {
                rotationY += 0.003;
            }
            model.rotation.y = rotationY;
            
            // Légère oscillation
            model.position.y = -1 + Math.sin(Date.now() * 0.001) * 0.1;
        }
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
    
    console.log('Animation 3D démarrée');
})();
