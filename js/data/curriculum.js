/* British Learner: every iGCSE programme, unit and lesson, in English and French.
   Format of each programme's text:
     # Unit in English :: Unit in French
     Lesson in English :: Lesson in French; Next lesson :: Leçon suivante

   Unit and lesson names follow the headings of the official specifications:
   Cambridge IGCSE syllabuses, Pearson Edexcel International GCSE specifications
   and OxfordAQA International GCSE specifications. Where a heading covers a lot,
   it's split into several lessons using the content listed under it. */
window.BL = window.BL || {};

BL.subjects = [
  { id: "maths", en: "Maths", fr: "Maths", icon: "∑" },
  { id: "physics", en: "Physics", fr: "Physique", icon: "⚛" },
  { id: "chemistry", en: "Chemistry", fr: "Chimie", icon: "⚗" },
  { id: "biology", en: "Biology", fr: "Biologie", icon: "❦" },
  { id: "cs", en: "Computer Science", fr: "Informatique", short: "CS", shortFr: "Info", icon: "⌘" },
];
BL.boards = [
  { id: "cambridge", name: "Cambridge", full: "Cambridge International" },
  { id: "edexcel", name: "Edexcel", full: "Pearson Edexcel" },
  { id: "aqa", name: "AQA", full: "OxfordAQA" },
];
BL.levels = [
  { id: "igcse", name: "iGCSE" },
  { id: "as", name: "AS-Level" },
  { id: "a", name: "A-Level" },
];

BL.programmes = {
maths: {
cambridge: { en: "Cambridge IGCSE Mathematics", fr: "Mathématiques – IGCSE Cambridge", code: "0580", text: `
# 1. Number :: 1. Nombres
Types of number :: Types de nombres; Sets :: Ensembles; Powers and roots :: Puissances et racines; Fractions, decimals and percentages :: Fractions, décimaux et pourcentages; Ordering :: Rangement; The four operations :: Les quatre opérations; Indices I :: Exposants I; Standard form :: Écriture scientifique; Estimation :: Estimation; Limits of accuracy :: Limites de précision; Ratio and proportion :: Ratio et proportion; Rates :: Taux; Percentages :: Pourcentages; Using a calculator :: Utiliser une calculatrice; Time :: Temps; Money :: Argent; Exponential growth and decay :: Croissance et décroissance exponentielles; Surds :: Radicaux
# 2. Algebra and graphs :: 2. Algèbre et graphiques
Introduction to algebra :: Introduction à l'algèbre; Algebraic manipulation :: Calcul algébrique; Algebraic fractions :: Fractions algébriques; Indices II :: Exposants II; Equations :: Équations; Inequalities :: Inéquations; Sequences :: Suites; Proportion :: Proportionnalité; Graphs in practical situations :: Graphiques de situations concrètes; Graphs of functions :: Graphiques de fonctions; Sketching curves :: Esquisser des courbes; Differentiation :: Dérivation; Functions :: Fonctions
# 3. Coordinate geometry :: 3. Géométrie analytique
Coordinates :: Coordonnées; Drawing linear graphs :: Tracer des droites; Gradient of linear graphs :: Pente d'une droite; Length and midpoint :: Longueur et milieu; Equations of linear graphs :: Équations de droites; Parallel lines :: Droites parallèles; Perpendicular lines :: Droites perpendiculaires
# 4. Geometry :: 4. Géométrie
Geometrical terms :: Vocabulaire géométrique; Geometrical constructions :: Constructions géométriques; Scale drawings :: Dessins à l'échelle; Similarity :: Similitude; Symmetry :: Symétrie; Angles :: Angles; Circle theorems I :: Théorèmes du cercle I; Circle theorems II :: Théorèmes du cercle II
# 5. Mensuration :: 5. Mesures
Units of measure :: Unités de mesure; Area and perimeter :: Aire et périmètre; Circles, arcs and sectors :: Cercles, arcs et secteurs; Surface area and volume :: Aire de surface et volume; Compound shapes and parts of shapes :: Formes composées et parties de formes
# 6. Trigonometry :: 6. Trigonométrie
Pythagoras' theorem :: Théorème de Pythagore; Right-angled triangles :: Triangles rectangles; Exact trigonometric values :: Valeurs trigonométriques exactes; Trigonometric functions :: Fonctions trigonométriques; Non-right-angled triangles :: Triangles quelconques; Pythagoras' theorem and trigonometry in 3D :: Pythagore et trigonométrie en 3D
# 7. Transformations and vectors :: 7. Transformations et vecteurs
Transformations :: Transformations; Vectors in two dimensions :: Vecteurs en deux dimensions; Magnitude of a vector :: Norme d'un vecteur; Vector geometry :: Géométrie vectorielle
# 8. Probability :: 8. Probabilités
Introduction to probability :: Introduction aux probabilités; Relative and expected frequencies :: Fréquences relatives et attendues; Probability of combined events :: Probabilité d'événements combinés; Conditional probability :: Probabilité conditionnelle
# 9. Statistics :: 9. Statistiques
Classifying statistical data :: Classer des données statistiques; Interpreting statistical data :: Interpréter des données statistiques; Averages and measures of spread :: Moyennes et mesures de dispersion; Statistical charts and diagrams :: Graphiques et diagrammes statistiques; Scatter diagrams :: Nuages de points; Cumulative frequency diagrams :: Diagrammes de fréquences cumulées; Histograms :: Histogrammes` },
edexcel: { en: "Pearson Edexcel International GCSE Mathematics A", fr: "Mathématiques A – GCSE international Pearson Edexcel", code: "4MA1", text: `
# 1. Numbers and the number system :: 1. Les nombres et le système de numération
Integers :: Nombres entiers; Fractions :: Fractions; Decimals :: Décimaux; Powers and roots :: Puissances et racines; Surds :: Radicaux; Set language and notation :: Langage et notation des ensembles; Percentages :: Pourcentages; Ratio and proportion :: Ratio et proportion; Degree of accuracy :: Degré de précision; Upper and lower bounds :: Bornes supérieure et inférieure; Standard form :: Écriture scientifique; Applying number :: Appliquer les nombres; Electronic calculators :: Calculatrices électroniques
# 2. Equations, formulae and identities :: 2. Équations, formules et identités
Use of symbols :: Utilisation des symboles; Algebraic manipulation :: Calcul algébrique; Expressions and formulae :: Expressions et formules; Linear equations :: Équations linéaires; Proportion :: Proportionnalité; Simultaneous linear equations :: Systèmes d'équations linéaires; Quadratic equations :: Équations du second degré; Inequalities :: Inéquations
# 3. Sequences, functions and graphs :: 3. Suites, fonctions et graphiques
Sequences :: Suites; Function notation :: Notation des fonctions; Graphs :: Graphiques; Calculus :: Calcul différentiel
# 4. Geometry and trigonometry :: 4. Géométrie et trigonométrie
Angles, lines and triangles :: Angles, droites et triangles; Polygons :: Polygones; Symmetry :: Symétrie; Measures :: Mesures; Construction :: Constructions; Circle properties :: Propriétés du cercle; Geometrical reasoning :: Raisonnement géométrique; Pythagoras' theorem :: Théorème de Pythagore; Trigonometry :: Trigonométrie; Mensuration of 2D shapes :: Mesure des formes 2D; 3D shapes and volume :: Formes 3D et volume; Similarity :: Similitude
# 5. Vectors and transformation geometry :: 5. Vecteurs et transformations géométriques
Vectors :: Vecteurs; Transformation geometry :: Transformations géométriques
# 6. Statistics and probability :: 6. Statistiques et probabilités
Graphical representation of data :: Représentation graphique des données; Statistical measures :: Mesures statistiques; Probability :: Probabilités` },
aqa: { en: "OxfordAQA International GCSE Mathematics", fr: "Mathématiques – GCSE international OxfordAQA", code: "9260", text: `
# Number: structure and calculation :: Nombres : structure et calcul
Ordering numbers :: Ranger des nombres; The four operations :: Les quatre opérations; Factors, multiples and primes :: Facteurs, multiples et nombres premiers; Powers and roots :: Puissances et racines; Standard form :: Écriture scientifique; Surds :: Radicaux; Rounding and estimation :: Arrondis et estimation; Bounds :: Bornes
# Number: fractions, decimals and percentages :: Nombres : fractions, décimaux et pourcentages
Equivalent fractions :: Fractions équivalentes; Fractions and decimals :: Fractions et décimaux; Percentages :: Pourcentages; Percentage change :: Variation en pourcentage
# Number: ratio and proportion :: Nombres : ratio et proportion
Ratio :: Ratio; Measures of rate :: Mesures de taux; Direct and inverse proportion :: Proportionnalité directe et inverse
# Algebra: notation and manipulation :: Algèbre : notation et calcul
Algebraic notation :: Notation algébrique; Simplifying expressions :: Simplifier des expressions; Expanding and factorising :: Développer et factoriser; Rearranging formulae :: Transformer des formules; Algebraic fractions :: Fractions algébriques
# Algebra: functions, graphs and calculus :: Algèbre : fonctions, graphiques et calcul différentiel
Functions :: Fonctions; Coordinates :: Coordonnées; Straight-line graphs :: Graphiques de droites; Quadratic and other graphs :: Graphiques du second degré et autres; Real-life graphs :: Graphiques de la vie réelle; Differentiation :: Dérivation
# Algebra: solving equations and inequalities :: Algèbre : résoudre des équations et inéquations
Linear equations :: Équations linéaires; Quadratic equations :: Équations du second degré; Simultaneous equations :: Systèmes d'équations; Inequalities :: Inéquations
# Algebra: sequences :: Algèbre : suites
Term-to-term and position-to-term rules :: Règles de terme à terme et de position à terme; The nth term :: Le terme de rang n
# Geometry: properties and constructions :: Géométrie : propriétés et constructions
Geometric terms and notation :: Termes et notation géométriques; Angles and polygons :: Angles et polygones; Congruence and similarity :: Congruence et similitude; Circle theorems :: Théorèmes du cercle; Constructions and loci :: Constructions et lieux géométriques; Measuring lines and angles :: Mesurer des segments et des angles
# Geometry: mensuration and calculation :: Géométrie : mesures et calculs
Units of measure :: Unités de mesure; Perimeter and area :: Périmètre et aire; Volume and surface area :: Volume et aire de surface; Arcs and sectors :: Arcs et secteurs; Pythagoras' theorem :: Théorème de Pythagore; Trigonometry :: Trigonométrie; Sine and cosine rules :: Lois des sinus et du cosinus
# Geometry: transformations, matrices and vectors :: Géométrie : transformations, matrices et vecteurs
Rotations, reflections, translations and enlargements :: Rotations, réflexions, translations et agrandissements; Matrix transformations :: Transformations par matrices; Vectors :: Vecteurs
# Statistics: presentation and analysis :: Statistiques : présentation et analyse
Types of data :: Types de données; Charts and diagrams :: Graphiques et diagrammes; Averages and spread :: Moyennes et dispersion; Scatter graphs :: Nuages de points
# Statistics: interpretation :: Statistiques : interprétation
Reading graphs and diagrams :: Lire des graphiques et diagrammes; Comparing distributions :: Comparer des distributions
# Probability :: Probabilités
Measures of probability :: Mesures de probabilité; Experimental and theoretical probability :: Probabilité expérimentale et théorique; Combined events :: Événements combinés; Conditional probability :: Probabilité conditionnelle` },
},

physics: {
cambridge: { en: "Cambridge IGCSE Physics", fr: "Physique – IGCSE Cambridge", code: "0625", text: `
# 1. Motion, forces and energy :: 1. Mouvement, forces et énergie
Physical quantities and measurement techniques :: Grandeurs physiques et techniques de mesure; Motion :: Mouvement; Mass and weight :: Masse et poids; Density :: Masse volumique; Effects of forces :: Effets des forces; Turning effect of forces :: Effet de rotation des forces; Centre of gravity :: Centre de gravité; Momentum :: Quantité de mouvement; Energy :: Énergie; Work :: Travail; Energy resources :: Ressources énergétiques; Efficiency :: Rendement; Power :: Puissance; Pressure :: Pression
# 2. Thermal physics :: 2. Physique thermique
Kinetic particle model of matter :: Modèle cinétique des particules; Thermal expansion of solids, liquids and gases :: Dilatation thermique des solides, liquides et gaz; Specific heat capacity :: Capacité thermique massique; Melting, boiling and evaporation :: Fusion, ébullition et évaporation; Conduction :: Conduction; Convection :: Convection; Radiation :: Rayonnement; Consequences of thermal energy transfer :: Conséquences des transferts thermiques
# 3. Waves :: 3. Ondes
General properties of waves :: Propriétés générales des ondes; Reflection of light :: Réflexion de la lumière; Refraction of light :: Réfraction de la lumière; Thin lenses :: Lentilles minces; Dispersion of light :: Dispersion de la lumière; Electromagnetic spectrum :: Spectre électromagnétique; Sound :: Son
# 4. Electricity and magnetism :: 4. Électricité et magnétisme
Simple phenomena of magnetism :: Phénomènes simples du magnétisme; Electric charge :: Charge électrique; Electric current :: Courant électrique; Electromotive force and potential difference :: Force électromotrice et différence de potentiel; Resistance :: Résistance; Electrical energy and electrical power :: Énergie et puissance électriques; Circuit diagrams :: Schémas électriques; Series and parallel circuits :: Circuits en série et en parallèle; Action and use of circuit components :: Rôle et usage des composants; Electrical safety :: Sécurité électrique; Electromagnetic induction :: Induction électromagnétique; The a.c. generator :: L'alternateur; Magnetic effect of a current :: Effet magnétique d'un courant; Force on a current-carrying conductor :: Force sur un conducteur parcouru par un courant; The d.c. motor :: Le moteur à courant continu; The transformer :: Le transformateur
# 5. Nuclear physics :: 5. Physique nucléaire
The atom :: L'atome; The nucleus :: Le noyau; Detection of radioactivity :: Détection de la radioactivité; The three types of nuclear emission :: Les trois types d'émission nucléaire; Radioactive decay :: Désintégration radioactive; Half-life :: Demi-vie; Safety precautions :: Précautions de sécurité
# 6. Space physics :: 6. Physique de l'espace
The Earth :: La Terre; The Solar System :: Le Système solaire; The Sun as a star :: Le Soleil, une étoile; Stars :: Étoiles; The Universe :: L'Univers` },
edexcel: { en: "Pearson Edexcel International GCSE Physics", fr: "Physique – GCSE international Pearson Edexcel", code: "4PH1", text: `
# 1. Forces and motion :: 1. Forces et mouvement
Units in forces and motion :: Unités des forces et du mouvement; Movement and position :: Mouvement et position; Distance-time graphs :: Graphiques distance-temps; Acceleration and velocity-time graphs :: Accélération et graphiques vitesse-temps; Effects of forces :: Effets des forces; Force, mass and acceleration :: Force, masse et accélération; Weight and terminal velocity :: Poids et vitesse limite; Stopping distance :: Distance d'arrêt; Hooke's law and elastic behaviour :: Loi de Hooke et élasticité; Momentum :: Quantité de mouvement; Newton's third law :: Troisième loi de Newton; Moments :: Moments
# 2. Electricity :: 2. Électricité
Units in electricity :: Unités en électricité; Mains electricity :: Électricité du secteur; Energy and voltage in circuits :: Énergie et tension dans les circuits; Current and charge :: Courant et charge; Series and parallel circuits :: Circuits en série et en parallèle; Resistance and current-voltage graphs :: Résistance et courbes courant-tension; Electric charge :: Charge électrique; Static electricity and its uses :: L'électricité statique et ses usages
# 3. Waves :: 3. Ondes
Units in waves :: Unités des ondes; Properties of waves :: Propriétés des ondes; The electromagnetic spectrum :: Le spectre électromagnétique; Light: reflection and refraction :: Lumière : réflexion et réfraction; Total internal reflection :: Réflexion totale interne; Sound :: Son
# 4. Energy resources and energy transfers :: 4. Ressources énergétiques et transferts d'énergie
Units in energy :: Unités de l'énergie; Energy transfers :: Transferts d'énergie; Conduction, convection and radiation :: Conduction, convection et rayonnement; Work and power :: Travail et puissance; Energy resources and electricity generation :: Ressources énergétiques et production d'électricité
# 5. Solids, liquids and gases :: 5. Solides, liquides et gaz
Units in matter :: Unités de la matière; Density and pressure :: Masse volumique et pression; Change of state :: Changement d'état; Specific heat capacity :: Capacité thermique massique; Ideal gas molecules :: Molécules d'un gaz parfait
# 6. Magnetism and electromagnetism :: 6. Magnétisme et électromagnétisme
Units in magnetism :: Unités du magnétisme; Magnetism :: Magnétisme; Electromagnetism :: Électromagnétisme; Electromagnetic induction :: Induction électromagnétique; Transformers :: Transformateurs
# 7. Radioactivity and particles :: 7. Radioactivité et particules
Units in radioactivity :: Unités de la radioactivité; Radioactivity :: Radioactivité; Half-life :: Demi-vie; Uses and dangers of radiation :: Usages et dangers des rayonnements; Fission and fusion :: Fission et fusion
# 8. Astrophysics :: 8. Astrophysique
Units in astrophysics :: Unités de l'astrophysique; Motion in the universe :: Mouvement dans l'Univers; Stellar evolution :: Évolution des étoiles; Cosmology :: Cosmologie` },
aqa: { en: "OxfordAQA International GCSE Physics", fr: "Physique – GCSE international OxfordAQA", code: "9203", text: `
# Forces and their effects :: Les forces et leurs effets
Forces and their interactions :: Les forces et leurs interactions; Motion :: Mouvement; Resultant forces :: Forces résultantes; Momentum :: Quantité de mouvement; Safety in public transport :: Sécurité dans les transports; Forces and terminal velocity :: Forces et vitesse limite; Centre of mass :: Centre de masse; Moments and levers :: Moments et leviers
# Energy :: Énergie
Forces and energy :: Forces et énergie; Energy transfers, conservation and dissipation of energy :: Transferts, conservation et dissipation de l'énergie; Energy resources :: Ressources énergétiques
# Waves :: Ondes
General properties of waves :: Propriétés générales des ondes; The electromagnetic spectrum :: Le spectre électromagnétique; Sound and ultrasound :: Son et ultrasons; Reflection :: Réflexion; Refraction and total internal reflection :: Réfraction et réflexion totale interne; Lenses and the eye :: Les lentilles et l'œil
# Particle model of matter :: Modèle particulaire de la matière
Kinetic theory :: Théorie cinétique; Energy transfers and particle motion :: Transferts d'énergie et mouvement des particules
# Electricity and magnetism :: Électricité et magnétisme
Electrical circuits :: Circuits électriques; Magnetism and electromagnetism :: Magnétisme et électromagnétisme
# Generating and distributing electricity and household use :: Production, distribution et usage domestique de l'électricité
Generating electricity :: Produire de l'électricité; Electricity transmission and distribution :: Transport et distribution de l'électricité; Using electricity in the home :: L'électricité à la maison; The motor effect :: L'effet moteur; Transferring electrical energy :: Transférer l'énergie électrique
# Nuclear physics :: Physique nucléaire
Atomic structure :: Structure de l'atome; Ionizing radiation from the nucleus :: Rayonnements ionisants du noyau; Nuclear fission :: Fission nucléaire; Nuclear fusion :: Fusion nucléaire
# Space physics :: Physique de l'espace
Life cycle of a star :: Cycle de vie d'une étoile; Solar system and orbital motion :: Système solaire et mouvement orbital; Red shift and the expanding universe :: Décalage vers le rouge et expansion de l'Univers` },
},

chemistry: {
cambridge: { en: "Cambridge IGCSE Chemistry", fr: "Chimie – IGCSE Cambridge", code: "0620", text: `
# 1. States of matter :: 1. États de la matière
Solids, liquids and gases :: Solides, liquides et gaz; Diffusion :: Diffusion
# 2. Atoms, elements and compounds :: 2. Atomes, éléments et composés
Elements, compounds and mixtures :: Éléments, composés et mélanges; Atomic structure and the Periodic Table :: Structure atomique et tableau périodique; Isotopes :: Isotopes; Ions and ionic bonds :: Ions et liaisons ioniques; Simple molecules and covalent bonds :: Molécules simples et liaisons covalentes; Giant covalent structures :: Structures covalentes géantes; Metallic bonding :: Liaison métallique
# 3. Stoichiometry :: 3. Stœchiométrie
Formulae :: Formules; Relative masses of atoms and molecules :: Masses relatives des atomes et des molécules; The mole and the Avogadro constant :: La mole et la constante d'Avogadro
# 4. Electrochemistry :: 4. Électrochimie
Electrolysis :: Électrolyse; Hydrogen-oxygen fuel cells :: Piles à combustible hydrogène-oxygène
# 5. Chemical energetics :: 5. Énergétique chimique
Exothermic and endothermic reactions :: Réactions exothermiques et endothermiques
# 6. Chemical reactions :: 6. Réactions chimiques
Physical and chemical changes :: Transformations physiques et chimiques; Rate of reaction :: Vitesse de réaction; Reversible reactions and equilibrium :: Réactions réversibles et équilibre; Redox :: Oxydoréduction
# 7. Acids, bases and salts :: 7. Acides, bases et sels
The characteristic properties of acids and bases :: Propriétés caractéristiques des acides et des bases; Oxides :: Oxydes; Preparation of salts :: Préparation des sels
# 8. The Periodic Table :: 8. Le tableau périodique
Arrangement of elements :: Disposition des éléments; Group I properties :: Propriétés du groupe I; Group VII properties :: Propriétés du groupe VII; Transition elements :: Éléments de transition; Noble gases :: Gaz nobles
# 9. Metals :: 9. Métaux
Properties of metals :: Propriétés des métaux; Uses of metals :: Usages des métaux; Alloys and their properties :: Les alliages et leurs propriétés; Reactivity series :: Série de réactivité; Corrosion of metals :: Corrosion des métaux; Extraction of metals :: Extraction des métaux
# 10. Chemistry of the environment :: 10. Chimie de l'environnement
Water :: Eau; Fertilisers :: Engrais; Air quality and climate :: Qualité de l'air et climat
# 11. Organic chemistry :: 11. Chimie organique
Formulae, functional groups and terminology :: Formules, groupes fonctionnels et terminologie; Naming organic compounds :: Nommer les composés organiques; Fuels :: Combustibles; Alkanes :: Alcanes; Alkenes :: Alcènes; Alcohols :: Alcools; Carboxylic acids :: Acides carboxyliques; Polymers :: Polymères
# 12. Experimental techniques and chemical analysis :: 12. Techniques expérimentales et analyse chimique
Experimental design :: Conception d'expériences; Acid-base titrations :: Titrages acido-basiques; Chromatography :: Chromatographie; Separation and purification :: Séparation et purification; Identification of ions and gases :: Identification des ions et des gaz` },
edexcel: { en: "Pearson Edexcel International GCSE Chemistry", fr: "Chimie – GCSE international Pearson Edexcel", code: "4CH1", text: `
# 1. Principles of chemistry :: 1. Principes de la chimie
States of matter :: États de la matière; Elements, compounds and mixtures :: Éléments, composés et mélanges; Atomic structure :: Structure atomique; The Periodic Table :: Le tableau périodique; Chemical formulae and equations :: Formules et équations chimiques; Relative masses and moles :: Masses relatives et moles; Molar volumes of gases :: Volumes molaires des gaz; Ionic bonding :: Liaison ionique; Covalent bonding :: Liaison covalente; Metallic bonding :: Liaison métallique; Electrolysis :: Électrolyse
# 2. Inorganic chemistry :: 2. Chimie inorganique
Group 1 (alkali metals): lithium, sodium and potassium :: Groupe 1 (métaux alcalins) : lithium, sodium et potassium; Group 7 (halogens): chlorine, bromine and iodine :: Groupe 7 (halogènes) : chlore, brome et iode; Gases in the atmosphere :: Gaz de l'atmosphère; Reactivity series :: Série de réactivité; Extraction and uses of metals :: Extraction et usages des métaux; Acids, alkalis and titrations :: Acides, bases solubles et titrages; Acids, bases and salt preparations :: Acides, bases et préparation des sels; Chemical tests :: Tests chimiques
# 3. Physical chemistry :: 3. Chimie physique
Energetics :: Énergétique; Rates of reaction :: Vitesses de réaction; Reversible reactions and equilibria :: Réactions réversibles et équilibres
# 4. Organic chemistry :: 4. Chimie organique
Introduction to organic chemistry :: Introduction à la chimie organique; Crude oil :: Pétrole brut; Alkanes :: Alcanes; Alkenes :: Alcènes; Alcohols :: Alcools; Carboxylic acids :: Acides carboxyliques; Esters :: Esters; Synthetic polymers :: Polymères synthétiques` },
aqa: { en: "OxfordAQA International GCSE Chemistry", fr: "Chimie – GCSE international OxfordAQA", code: "9202", text: `
# Atomic structure and the periodic table :: Structure atomique et tableau périodique
Solids, liquids and gases :: Solides, liquides et gaz; A simple model of the atom :: Un modèle simple de l'atome; The Periodic Table :: Le tableau périodique
# Structure, bonding and the properties of matter :: Structure, liaisons et propriétés de la matière
Chemical bonds: ionic, covalent and metallic :: Liaisons chimiques : ioniques, covalentes et métalliques; How bonding and structure are related to the properties of substances :: Lien entre liaisons, structure et propriétés des substances; Structure and bonding of carbon :: Structure et liaisons du carbone; Nanoparticles :: Nanoparticules
# Chemical changes :: Transformations chimiques
Metals :: Métaux; Electrolysis :: Électrolyse
# Chemical analysis :: Analyse chimique
Purity and chromatography :: Pureté et chromatographie; Identification of common gases :: Identification des gaz courants; Identification of ions :: Identification des ions
# Acids, bases and salts :: Acides, bases et sels
The properties of acids and bases :: Propriétés des acides et des bases; Preparation of salts :: Préparation des sels
# Quantitative chemistry :: Chimie quantitative
Conservation of mass :: Conservation de la masse; Amount of substance in relation to masses :: Quantité de matière et masses; The mole concept :: La notion de mole; Molar concentrations :: Concentrations molaires
# Trends within the periodic table :: Tendances du tableau périodique
Group properties :: Propriétés des groupes; Transition metals :: Métaux de transition
# The rate and extent of chemical change :: Vitesse et étendue des transformations chimiques
Rate of reaction :: Vitesse de réaction; Factors affecting equilibrium :: Facteurs influençant l'équilibre; Production of ammonia and sulfuric acid :: Production d'ammoniac et d'acide sulfurique; Redox reactions :: Réactions d'oxydoréduction
# Energy changes :: Variations d'énergie
Exothermic and endothermic reactions :: Réactions exothermiques et endothermiques; Calculating and explaining energy change :: Calculer et expliquer les variations d'énergie; Chemical cells and fuel cells :: Piles chimiques et piles à combustible
# Organic chemistry :: Chimie organique
Carbon compounds as fuels :: Les composés du carbone comme combustibles; Synthetic and naturally occurring polymers :: Polymères synthétiques et naturels; Organic compounds: their structure and reactions :: Composés organiques : structure et réactions` },
},

biology: {
cambridge: { en: "Cambridge IGCSE Biology", fr: "Biologie – IGCSE Cambridge", code: "0610", text: `
# 1. Characteristics and classification of living organisms :: 1. Caractéristiques et classification du vivant
Characteristics of living organisms :: Caractéristiques des êtres vivants; Concept and uses of classification systems :: Notion et usages des systèmes de classification; Features of organisms :: Caractères des organismes
# 2. Organisation of the organism :: 2. Organisation de l'organisme
Cell structure :: Structure de la cellule; Size of specimens :: Taille des spécimens
# 3. Movement into and out of cells :: 3. Entrées et sorties des cellules
Diffusion :: Diffusion; Osmosis :: Osmose; Active transport :: Transport actif
# 4. Biological molecules :: 4. Molécules biologiques
Biological molecules :: Molécules biologiques
# 5. Enzymes :: 5. Enzymes
Enzymes :: Enzymes
# 6. Plant nutrition :: 6. Nutrition des plantes
Photosynthesis :: Photosynthèse; Leaf structure :: Structure de la feuille
# 7. Human nutrition :: 7. Nutrition humaine
Diet :: Alimentation; Digestive system :: Système digestif; Physical digestion :: Digestion mécanique; Chemical digestion :: Digestion chimique; Absorption :: Absorption
# 8. Transport in plants :: 8. Transport chez les plantes
Xylem and phloem :: Xylème et phloème; Water uptake :: Absorption de l'eau; Transpiration :: Transpiration; Translocation :: Translocation
# 9. Transport in animals :: 9. Transport chez les animaux
Circulatory systems :: Systèmes circulatoires; Heart :: Cœur; Blood vessels :: Vaisseaux sanguins; Blood :: Sang
# 10. Diseases and immunity :: 10. Maladies et immunité
Diseases and immunity :: Maladies et immunité
# 11. Gas exchange in humans :: 11. Échanges gazeux chez l'humain
Gas exchange in humans :: Échanges gazeux chez l'humain
# 12. Respiration :: 12. Respiration
Respiration :: Respiration; Aerobic respiration :: Respiration aérobie; Anaerobic respiration :: Respiration anaérobie
# 13. Excretion in humans :: 13. Excrétion chez l'humain
Excretion in humans :: Excrétion chez l'humain
# 14. Coordination and response :: 14. Coordination et réponse
Coordination and response :: Coordination et réponse; Sense organs :: Organes des sens; Hormones :: Hormones; Homeostasis :: Homéostasie; Tropic responses :: Tropismes
# 15. Drugs :: 15. Médicaments et drogues
Drugs :: Médicaments et drogues
# 16. Reproduction :: 16. Reproduction
Asexual reproduction :: Reproduction asexuée; Sexual reproduction :: Reproduction sexuée; Sexual reproduction in plants :: Reproduction sexuée des plantes; Sexual reproduction in humans :: Reproduction sexuée humaine; Sex hormones in humans :: Hormones sexuelles humaines; Sexually transmitted infections :: Infections sexuellement transmissibles
# 17. Inheritance :: 17. Hérédité
Chromosomes, genes and proteins :: Chromosomes, gènes et protéines; Mitosis :: Mitose; Meiosis :: Méiose; Monohybrid inheritance :: Hérédité monohybride
# 18. Variation and selection :: 18. Variation et sélection
Variation :: Variation; Adaptive features :: Caractères adaptatifs; Selection :: Sélection
# 19. Organisms and their environment :: 19. Les organismes et leur environnement
Energy flow :: Flux d'énergie; Food chains and food webs :: Chaînes et réseaux alimentaires; Nutrient cycles :: Cycles des nutriments; Populations :: Populations
# 20. Human influences on ecosystems :: 20. Influence de l'humain sur les écosystèmes
Food supply :: Approvisionnement alimentaire; Habitat destruction :: Destruction des habitats; Pollution :: Pollution; Conservation :: Conservation
# 21. Biotechnology and genetic modification :: 21. Biotechnologie et modification génétique
Biotechnology and genetic modification :: Biotechnologie et modification génétique; Biotechnology :: Biotechnologie; Genetic modification :: Modification génétique` },
edexcel: { en: "Pearson Edexcel International GCSE Biology", fr: "Biologie – GCSE international Pearson Edexcel", code: "4BI1", text: `
# 1. The nature and variety of living organisms :: 1. Nature et diversité des êtres vivants
Characteristics of living organisms :: Caractéristiques des êtres vivants; Variety of living organisms :: Diversité des êtres vivants
# 2. Structure and functions in living organisms :: 2. Structures et fonctions des êtres vivants
Level of organisation :: Niveaux d'organisation; Cell structure :: Structure de la cellule; Biological molecules :: Molécules biologiques; Enzymes :: Enzymes; Movement of substances into and out of cells :: Entrées et sorties de substances des cellules; Nutrition in flowering plants :: Nutrition des plantes à fleurs; Nutrition in humans :: Nutrition humaine; Respiration :: Respiration; Gas exchange in flowering plants :: Échanges gazeux des plantes à fleurs; Gas exchange in humans :: Échanges gazeux chez l'humain; Transport in flowering plants :: Transport chez les plantes à fleurs; Transport in humans :: Transport chez l'humain; Excretion in flowering plants :: Excrétion des plantes à fleurs; Excretion in humans :: Excrétion chez l'humain; Co-ordination and response in flowering plants :: Coordination et réponse des plantes à fleurs; Co-ordination and response in humans :: Coordination et réponse chez l'humain
# 3. Reproduction and inheritance :: 3. Reproduction et hérédité
Reproduction in flowering plants :: Reproduction des plantes à fleurs; Reproduction in humans :: Reproduction humaine; Genes, DNA and chromosomes :: Gènes, ADN et chromosomes; Monohybrid inheritance :: Hérédité monohybride; Mitosis and meiosis :: Mitose et méiose; Variation, mutation and evolution :: Variation, mutation et évolution
# 4. Ecology and the environment :: 4. Écologie et environnement
The organism in the environment :: L'organisme dans son environnement; Feeding relationships :: Relations alimentaires; Cycles within ecosystems :: Cycles dans les écosystèmes; Human influences on the environment :: Influence de l'humain sur l'environnement
# 5. Use of biological resources :: 5. Usage des ressources biologiques
Food production: crop plants :: Production alimentaire : cultures; Food production: micro-organisms :: Production alimentaire : micro-organismes; Food production: fish farming :: Production alimentaire : pisciculture; Selective breeding :: Sélection artificielle; Genetic modification (genetic engineering) :: Modification génétique (génie génétique); Cloning :: Clonage` },
aqa: { en: "OxfordAQA International GCSE Biology", fr: "Biologie – GCSE international OxfordAQA", code: "9201", text: `
# Organisation :: Organisation
Cell structure :: Structure de la cellule; Principles of organisation :: Principes d'organisation; Animal tissues, organs and systems :: Tissus, organes et systèmes animaux; Plant tissues, organs and systems :: Tissus, organes et systèmes végétaux; Transport in cells :: Transport dans les cellules
# Bioenergetics :: Bioénergétique
Photosynthesis :: Photosynthèse; Exchange and transport in plants :: Échanges et transport chez les plantes; Circulation in humans :: Circulation chez l'humain; Digestion :: Digestion; Breathing :: Ventilation; Respiration :: Respiration
# Ecology :: Écologie
Energy transferred in ecosystems :: Énergie transférée dans les écosystèmes; Adaptations, interdependence and competition :: Adaptations, interdépendance et compétition; Decay and the carbon cycle :: Décomposition et cycle du carbone; Humans and their effects on the environment :: Les humains et leurs effets sur l'environnement
# Organisms' interaction with the environment :: Interaction des organismes avec l'environnement
The human nervous system :: Le système nerveux humain; Homeostasis :: Homéostasie; Control of water and ion content of the body :: Contrôle de l'eau et des ions du corps; Temperature control :: Contrôle de la température; Control of blood glucose :: Contrôle de la glycémie; Behaviour :: Comportement; Infection and response :: Infection et réponse
# Inheritance :: Hérédité
Reproduction :: Reproduction; Cell division :: Division cellulaire; Genetic variation :: Variation génétique; Genetic disorders :: Maladies génétiques; Genetic manipulation :: Manipulation génétique
# Variation and evolution :: Variation et évolution
Continuous and discontinuous variation :: Variation continue et discontinue; Natural selection :: Sélection naturelle` },
},

cs: {
cambridge: { en: "Cambridge IGCSE Computer Science", fr: "Informatique – IGCSE Cambridge", code: "0478", text: `
# 1. Data representation :: 1. Représentation des données
Number systems :: Systèmes de numération; Text, sound and images :: Texte, son et images; Data storage and compression :: Stockage et compression des données
# 2. Data transmission :: 2. Transmission des données
Types and methods of data transmission :: Types et méthodes de transmission; Methods of error detection :: Méthodes de détection d'erreurs; Encryption :: Chiffrement
# 3. Hardware :: 3. Matériel
Computer architecture :: Architecture de l'ordinateur; Input and output devices :: Périphériques d'entrée et de sortie; Data storage :: Stockage des données; Network hardware :: Matériel réseau
# 4. Software :: 4. Logiciels
Types of software and interrupts :: Types de logiciels et interruptions; Types of programming language, translators and integrated development environments :: Langages de programmation, traducteurs et environnements de développement
# 5. The internet and its uses :: 5. Internet et ses usages
The internet and the World Wide Web :: Internet et le Web; Digital currency :: Monnaie numérique; Cyber security :: Cybersécurité
# 6. Automated and emerging technologies :: 6. Technologies automatisées et émergentes
Automated systems :: Systèmes automatisés; Robotics :: Robotique; Artificial intelligence :: Intelligence artificielle
# 7. Algorithm design and problem-solving :: 7. Conception d'algorithmes et résolution de problèmes
The program development life cycle :: Le cycle de développement d'un programme; Computer systems and sub-systems :: Systèmes et sous-systèmes informatiques; Flowcharts and pseudocode :: Organigrammes et pseudo-code; Standard methods of solution :: Méthodes de résolution standard; Validation and verification :: Validation et vérification; Test data :: Données de test; Trace tables :: Tables de trace; Identifying and correcting errors :: Repérer et corriger les erreurs
# 8. Programming :: 8. Programmation
Programming concepts :: Notions de programmation; Arrays :: Tableaux; File handling :: Gestion des fichiers
# 9. Databases :: 9. Bases de données
Single-table databases :: Bases de données à une table; Structured Query Language (SQL) :: Langage de requêtes SQL
# 10. Boolean logic :: 10. Logique booléenne
Logic gates :: Portes logiques; Logic circuits, truth tables and expressions :: Circuits logiques, tables de vérité et expressions` },
edexcel: { en: "Pearson Edexcel International GCSE Computer Science", fr: "Informatique – GCSE international Pearson Edexcel", code: "4CP0", text: `
# 1. Problem solving :: 1. Résolution de problèmes
Algorithms :: Algorithmes; Decomposition and abstraction :: Décomposition et abstraction
# 2. Programming :: 2. Programmation
Develop code :: Développer du code; Constructs :: Structures de contrôle; Data types and structures :: Types et structures de données; Input/output :: Entrées et sorties; Operators :: Opérateurs; Subprograms :: Sous-programmes
# 3. Data :: 3. Données
Binary :: Binaire; Data representation :: Représentation des données; Data storage and compression :: Stockage et compression des données; Encryption :: Chiffrement
# 4. Computers :: 4. Ordinateurs
Machines and computational modelling :: Machines et modélisation informatique; Hardware :: Matériel; Logic :: Logique; Software :: Logiciels; Programming languages :: Langages de programmation
# 5. Communication and the internet :: 5. Communication et Internet
Networks :: Réseaux; Network security :: Sécurité des réseaux; The internet and the World Wide Web :: Internet et le Web
# 6. The bigger picture :: 6. Vue d'ensemble
Emerging trends, issues and impact :: Tendances émergentes, enjeux et impact` },
aqa: { en: "OxfordAQA International GCSE Computer Science", fr: "Informatique – GCSE international OxfordAQA", code: "9210", text: `
# Algorithms :: Algorithmes
Representing algorithms :: Représenter des algorithmes; Efficiency of algorithms :: Efficacité des algorithmes; Searching algorithms :: Algorithmes de recherche; Sorting algorithms :: Algorithmes de tri
# Programming :: Programmation
Data types :: Types de données; Programming concepts :: Notions de programmation; Arithmetic operations :: Opérations arithmétiques; Relational operations :: Opérations relationnelles; Boolean operations :: Opérations booléennes; Data structures :: Structures de données; Input/output and file handling :: Entrées, sorties et gestion des fichiers; String handling operations :: Opérations sur les chaînes; Random number generation :: Génération de nombres aléatoires; Subroutines (procedures and functions) :: Sous-programmes (procédures et fonctions); Structured programming :: Programmation structurée; Robust and secure programming :: Programmation robuste et sécurisée; Classification of programming languages and translators :: Classification des langages et traducteurs
# Data representation :: Représentation des données
Number bases :: Bases de numération; Converting between number bases :: Conversions entre bases; Units of information :: Unités d'information; Binary arithmetic :: Arithmétique binaire; Character encoding :: Codage des caractères; Representing images :: Représenter les images; Representing sound :: Représenter le son; Data compression :: Compression des données
# Computer systems :: Systèmes informatiques
Hardware and software :: Matériel et logiciels; Boolean logic :: Logique booléenne; Software classification :: Classification des logiciels; Systems architecture :: Architecture des systèmes
# Computer networks :: Réseaux informatiques
Computer networks :: Réseaux informatiques
# Cyber security :: Cybersécurité
Cyber security threats :: Menaces de cybersécurité; Methods to detect and prevent cyber security threats :: Méthodes de détection et de prévention des menaces
# Relational databases and SQL :: Bases de données relationnelles et SQL
Relational databases :: Bases de données relationnelles; Database design :: Conception de bases de données; Structured Query Language (SQL) :: Langage de requêtes SQL
# Web page design :: Conception de pages web
Key concepts :: Notions clés; Hypertext Markup Language (HTML) :: Langage HTML` },
},
};

// Turn each programme's text into units and lessons.
BL.slug = function (s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); };
function splitNames(text) {
  const parts = text.split("::");
  return { en: parts[0].trim(), fr: (parts[1] || parts[0]).trim() };
}
BL.getProgramme = function (subject, board, level) {
  const p = level === "as" || level === "a" ? BL.advanced[subject][board][level] : BL.programmes[subject][board];
  if (p.units) return p;
  p.units = [];
  const seen = {};
  p.text.split("\n").map(function (l) { return l.trim(); }).filter(Boolean).forEach(function (line) {
    if (line.charAt(0) === "#") {
      const names = splitNames(line.slice(1));
      p.units.push({ en: names.en, fr: names.fr, lessons: [] });
      return;
    }
    const unit = p.units[p.units.length - 1];
    line.split(";").map(function (x) { return x.trim(); }).filter(Boolean).forEach(function (item) {
      const names = splitNames(item);
      // Two units can share a lesson name, so each lesson gets its own address.
      const base = BL.slug(names.en);
      seen[base] = (seen[base] || 0) + 1;
      unit.lessons.push({ en: names.en, fr: names.fr, slug: seen[base] > 1 ? base + "-" + seen[base] : base });
    });
  });
  return p;
};
