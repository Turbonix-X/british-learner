/* British Learner: every AS-Level and A-Level programme, unit and lesson, in English and French.
   Same format as curriculum.js. Unit and lesson names follow the official specifications:
   Cambridge International AS & A Level, Pearson Edexcel International Advanced Level
   and OxfordAQA International AS and A-level. Broad headings are split into several lessons. */
window.BL = window.BL || {};

BL.advanced = {
maths: {
cambridge: {
as: { en: "Cambridge International AS Level Mathematics", fr: "Mathématiques – AS-Level international Cambridge", code: "9709", text: `
# Pure Mathematics 1 :: Mathématiques pures 1
Quadratics :: Fonctions du second degré; Functions :: Fonctions; Coordinate geometry :: Géométrie analytique; Circular measure :: Mesure en radians; Trigonometry :: Trigonométrie; Series :: Séries; Differentiation :: Dérivation; Integration :: Intégration
# Pure Mathematics 2 :: Mathématiques pures 2
Algebra :: Algèbre; Logarithmic and exponential functions :: Fonctions logarithmes et exponentielles; Trigonometry :: Trigonométrie; Differentiation :: Dérivation; Integration :: Intégration; Numerical solution of equations :: Résolution numérique d'équations
# Mechanics :: Mécanique
Forces and equilibrium :: Forces et équilibre; Kinematics of motion in a straight line :: Cinématique du mouvement rectiligne; Momentum :: Quantité de mouvement; Newton's laws of motion :: Lois du mouvement de Newton; Energy, work and power :: Énergie, travail et puissance
# Probability & Statistics 1 :: Probabilités et statistiques 1
Representation of data :: Représentation des données; Permutations and combinations :: Permutations et combinaisons; Probability :: Probabilités; Discrete random variables :: Variables aléatoires discrètes; The normal distribution :: La loi normale` },
a: { en: "Cambridge International A Level Mathematics", fr: "Mathématiques – A-Level international Cambridge", code: "9709", text: `
# Pure Mathematics 3 :: Mathématiques pures 3
Algebra :: Algèbre; Logarithmic and exponential functions :: Fonctions logarithmes et exponentielles; Trigonometry :: Trigonométrie; Differentiation :: Dérivation; Integration :: Intégration; Numerical solution of equations :: Résolution numérique d'équations; Vectors :: Vecteurs; Differential equations :: Équations différentielles; Complex numbers :: Nombres complexes
# Probability & Statistics 2 :: Probabilités et statistiques 2
The Poisson distribution :: La loi de Poisson; Linear combinations of random variables :: Combinaisons linéaires de variables aléatoires; Continuous random variables :: Variables aléatoires continues; Sampling and estimation :: Échantillonnage et estimation; Hypothesis tests :: Tests d'hypothèses` },
},
edexcel: {
as: { en: "Pearson Edexcel International AS Level Mathematics", fr: "Mathématiques – AS-Level international Pearson Edexcel", code: "XMA01", text: `
# Unit P1: Pure Mathematics :: Unité P1 : mathématiques pures
Algebra and functions :: Algèbre et fonctions; Coordinate geometry in the (x, y) plane :: Géométrie analytique dans le plan (x, y); Trigonometry :: Trigonométrie; Differentiation :: Dérivation; Integration :: Intégration
# Unit P2: Pure Mathematics :: Unité P2 : mathématiques pures
Proof :: Démonstration; Algebra and functions :: Algèbre et fonctions; Coordinate geometry in the (x, y) plane :: Géométrie analytique dans le plan (x, y); Sequences and series :: Suites et séries; Exponentials and logarithms :: Exponentielles et logarithmes; Trigonometry :: Trigonométrie; Differentiation :: Dérivation; Integration :: Intégration
# Unit M1: Mechanics :: Unité M1 : mécanique
Mathematical models in mechanics :: Modèles mathématiques en mécanique; Vectors in mechanics :: Vecteurs en mécanique; Kinematics of a particle moving in a straight line :: Cinématique d'un point en mouvement rectiligne; Dynamics of a particle moving in a straight line :: Dynamique d'un point en mouvement rectiligne; Statics of a particle :: Statique d'un point; Moments :: Moments
# Unit S1: Statistics :: Unité S1 : statistiques
Mathematical models in probability and statistics :: Modèles mathématiques en probabilités et statistiques; Representation and summary of data :: Représentation et résumé des données; Probability :: Probabilités; Correlation and regression :: Corrélation et régression; Discrete random variables :: Variables aléatoires discrètes; The Normal distribution :: La loi normale
# Unit D1: Decision Mathematics :: Unité D1 : mathématiques de la décision
Algorithms :: Algorithmes; Algorithms on graphs :: Algorithmes sur les graphes; The route inspection problem :: Le problème du postier; Critical path analysis :: Analyse du chemin critique; Linear programming :: Programmation linéaire` },
a: { en: "Pearson Edexcel International A Level Mathematics", fr: "Mathématiques – A-Level international Pearson Edexcel", code: "YMA01", text: `
# Unit P3: Pure Mathematics :: Unité P3 : mathématiques pures
Algebra and functions :: Algèbre et fonctions; Trigonometry :: Trigonométrie; Exponentials and logarithms :: Exponentielles et logarithmes; Differentiation :: Dérivation; Integration :: Intégration; Numerical methods :: Méthodes numériques
# Unit P4: Pure Mathematics :: Unité P4 : mathématiques pures
Proof :: Démonstration; Algebra and functions :: Algèbre et fonctions; Coordinate geometry in the (x, y) plane :: Géométrie analytique dans le plan (x, y); Binomial expansion :: Développement binomial; Differentiation :: Dérivation; Integration :: Intégration; Vectors :: Vecteurs
# Unit M2: Mechanics :: Unité M2 : mécanique
Kinematics of a particle moving in a straight line or plane :: Cinématique d'un point en ligne droite ou dans le plan; Centres of mass :: Centres de masse; Work and energy :: Travail et énergie; Collisions :: Collisions; Statics of rigid bodies :: Statique des solides
# Unit S2: Statistics :: Unité S2 : statistiques
The Binomial and Poisson distributions :: Les lois binomiale et de Poisson; Continuous random variables :: Variables aléatoires continues; Continuous distributions :: Lois continues; Hypothesis tests :: Tests d'hypothèses` },
},
aqa: {
as: { en: "OxfordAQA International AS Level Mathematics", fr: "Mathématiques – AS-Level international OxfordAQA", code: "9660", text: `
# Unit P1: Pure Maths :: Unité P1 : mathématiques pures
Surds and indices :: Radicaux et exposants; Quadratic functions :: Fonctions du second degré; Simultaneous equations and inequalities :: Systèmes d'équations et inéquations; Polynomials and the factor theorem :: Polynômes et théorème du facteur; Coordinate geometry and circles :: Géométrie analytique et cercles; Differentiation :: Dérivation; Integration :: Intégration
# Unit PSM1: Pure Maths :: Unité PSM1 : mathématiques pures
Sequences and series :: Suites et séries; Binomial expansion :: Développement binomial; Trigonometry :: Trigonométrie; Exponentials and logarithms :: Exponentielles et logarithmes; Further differentiation and integration :: Compléments de dérivation et d'intégration
# Unit PSM1: Statistics :: Unité PSM1 : statistiques
Data and measures of central tendency and spread :: Données, tendance centrale et dispersion; Probability :: Probabilités; Binomial distribution :: Loi binomiale; Normal distribution :: Loi normale; Estimation :: Estimation
# Unit PSM1: Mechanics :: Unité PSM1 : mécanique
Mathematical modelling :: Modélisation mathématique; Kinematics :: Cinématique; Constant acceleration :: Accélération constante; Statics and forces :: Statique et forces; Newton's laws of motion :: Lois du mouvement de Newton; Connected particles :: Points reliés` },
a: { en: "OxfordAQA International A Level Mathematics", fr: "Mathématiques – A-Level international OxfordAQA", code: "9660", text: `
# Unit P2: Pure Maths :: Unité P2 : mathématiques pures
Algebra and partial fractions :: Algèbre et fractions partielles; Functions :: Fonctions; Sequences and series :: Suites et séries; Cartesian and parametric equations :: Équations cartésiennes et paramétriques; Trigonometry :: Trigonométrie; Exponentials and logarithms :: Exponentielles et logarithmes; Differentiation :: Dérivation; Integration :: Intégration; Differential equations :: Équations différentielles; Numerical methods :: Méthodes numériques; Vectors :: Vecteurs
# Unit S2: Statistics :: Unité S2 : statistiques
Discrete random variables :: Variables aléatoires discrètes; Poisson distribution :: Loi de Poisson; Continuous random variables :: Variables aléatoires continues; Estimation and sampling :: Estimation et échantillonnage; Hypothesis testing :: Tests d'hypothèses
# Unit M2: Mechanics :: Unité M2 : mécanique
Circular motion :: Mouvement circulaire; Centres of mass :: Centres de masse; Moments and rigid bodies :: Moments et solides; Application of calculus to kinematics :: Calcul différentiel appliqué à la cinématique; Hooke's law :: Loi de Hooke; Work and energy :: Travail et énergie` },
},
},

physics: {
cambridge: {
as: { en: "Cambridge International AS Level Physics", fr: "Physique – AS-Level international Cambridge", code: "9702", text: `
# 1. Physical quantities and units :: 1. Grandeurs physiques et unités
Physical quantities :: Grandeurs physiques; SI units :: Unités SI; Errors and uncertainties :: Erreurs et incertitudes; Scalars and vectors :: Scalaires et vecteurs
# 2. Kinematics :: 2. Cinématique
Equations of motion :: Équations du mouvement
# 3. Dynamics :: 3. Dynamique
Momentum and Newton's laws of motion :: Quantité de mouvement et lois de Newton; Non-uniform motion :: Mouvement non uniforme; Linear momentum and its conservation :: Quantité de mouvement et sa conservation
# 4. Forces, density and pressure :: 4. Forces, masse volumique et pression
Turning effects of forces :: Effets de rotation des forces; Equilibrium of forces :: Équilibre des forces; Density and pressure :: Masse volumique et pression
# 5. Work, energy and power :: 5. Travail, énergie et puissance
Energy conservation :: Conservation de l'énergie; Gravitational potential energy and kinetic energy :: Énergie potentielle de pesanteur et énergie cinétique
# 6. Deformation of solids :: 6. Déformation des solides
Stress and strain :: Contrainte et déformation; Elastic and plastic behaviour :: Comportements élastique et plastique
# 7. Waves :: 7. Ondes
Progressive waves :: Ondes progressives; Transverse and longitudinal waves :: Ondes transversales et longitudinales; Doppler effect for sound waves :: Effet Doppler des ondes sonores; Electromagnetic spectrum :: Spectre électromagnétique; Polarisation :: Polarisation
# 8. Superposition :: 8. Superposition
Stationary waves :: Ondes stationnaires; Diffraction :: Diffraction; Interference :: Interférences; The diffraction grating :: Le réseau de diffraction
# 9. Electricity :: 9. Électricité
Electric current :: Courant électrique; Potential difference and power :: Différence de potentiel et puissance; Resistance and resistivity :: Résistance et résistivité
# 10. D.C. circuits :: 10. Circuits à courant continu
Practical circuits :: Circuits pratiques; Kirchhoff's laws :: Lois de Kirchhoff; Potential dividers :: Diviseurs de tension
# 11. Particle physics :: 11. Physique des particules
Atoms, nuclei and radiation :: Atomes, noyaux et rayonnements; Fundamental particles :: Particules fondamentales` },
a: { en: "Cambridge International A Level Physics", fr: "Physique – A-Level international Cambridge", code: "9702", text: `
# 12. Motion in a circle :: 12. Mouvement circulaire
Kinematics of uniform circular motion :: Cinématique du mouvement circulaire uniforme; Centripetal acceleration :: Accélération centripète
# 13. Gravitational fields :: 13. Champs gravitationnels
Gravitational field :: Champ gravitationnel; Gravitational force between point masses :: Force gravitationnelle entre masses ponctuelles; Gravitational field of a point mass :: Champ gravitationnel d'une masse ponctuelle; Gravitational potential :: Potentiel gravitationnel
# 14. Temperature :: 14. Température
Thermal equilibrium :: Équilibre thermique; Temperature scales :: Échelles de température; Specific heat capacity and specific latent heat :: Capacité thermique massique et chaleur latente massique
# 15. Ideal gases :: 15. Gaz parfaits
The mole :: La mole; Equation of state :: Équation d'état; Kinetic theory of gases :: Théorie cinétique des gaz
# 16. Thermodynamics :: 16. Thermodynamique
Internal energy :: Énergie interne; The first law of thermodynamics :: Le premier principe de la thermodynamique
# 17. Oscillations :: 17. Oscillations
Simple harmonic oscillations :: Oscillations harmoniques simples; Energy in simple harmonic motion :: Énergie du mouvement harmonique simple; Damped and forced oscillations, resonance :: Oscillations amorties et forcées, résonance
# 18. Electric fields :: 18. Champs électriques
Electric fields and field lines :: Champs électriques et lignes de champ; Uniform electric fields :: Champs électriques uniformes; Electric force between point charges :: Force électrique entre charges ponctuelles; Electric field of a point charge :: Champ électrique d'une charge ponctuelle; Electric potential :: Potentiel électrique
# 19. Capacitance :: 19. Capacité électrique
Capacitors and capacitance :: Condensateurs et capacité; Energy stored in a capacitor :: Énergie stockée dans un condensateur; Discharging a capacitor :: Décharge d'un condensateur
# 20. Magnetic fields :: 20. Champs magnétiques
Concept of a magnetic field :: Notion de champ magnétique; Force on a current-carrying conductor :: Force sur un conducteur parcouru par un courant; Force on a moving charge :: Force sur une charge en mouvement; Magnetic fields due to currents :: Champs magnétiques créés par des courants; Electromagnetic induction :: Induction électromagnétique
# 21. Alternating currents :: 21. Courants alternatifs
Characteristics of alternating currents :: Caractéristiques des courants alternatifs; Rectification and smoothing :: Redressement et lissage
# 22. Quantum physics :: 22. Physique quantique
Energy and momentum of a photon :: Énergie et quantité de mouvement d'un photon; Photoelectric effect :: Effet photoélectrique; Wave-particle duality :: Dualité onde-particule; Energy levels in atoms and line spectra :: Niveaux d'énergie des atomes et spectres de raies
# 23. Nuclear physics :: 23. Physique nucléaire
Mass defect and nuclear binding energy :: Défaut de masse et énergie de liaison nucléaire; Radioactive decay :: Désintégration radioactive
# 24. Medical physics :: 24. Physique médicale
Production and use of ultrasound :: Production et usage des ultrasons; Production and use of X-rays :: Production et usage des rayons X; PET scanning :: Tomographie par émission de positons
# 25. Astronomy and cosmology :: 25. Astronomie et cosmologie
Standard candles :: Chandelles standard; Stellar radii :: Rayons stellaires; Hubble's law and the Big Bang theory :: Loi de Hubble et théorie du Big Bang` },
},
edexcel: {
as: { en: "Pearson Edexcel International AS Level Physics", fr: "Physique – AS-Level international Pearson Edexcel", code: "XPH11", text: `
# Unit 1: Mechanics and Materials :: Unité 1 : mécanique et matériaux
Motion in a straight line :: Mouvement rectiligne; Scalars, vectors and projectiles :: Scalaires, vecteurs et projectiles; Forces and Newton's laws :: Forces et lois de Newton; Momentum :: Quantité de mouvement; Moments :: Moments; Work, energy and power :: Travail, énergie et puissance; Fluids and viscosity :: Fluides et viscosité; Stokes' law :: Loi de Stokes; Hooke's law :: Loi de Hooke; Stress, strain and the Young modulus :: Contrainte, déformation et module de Young
# Unit 2: Waves and Electricity :: Unité 2 : ondes et électricité
Wave properties :: Propriétés des ondes; Superposition and standing waves :: Superposition et ondes stationnaires; Refraction and polarisation :: Réfraction et polarisation; Diffraction and interference :: Diffraction et interférences; The photon model and the photoelectric effect :: Le modèle du photon et l'effet photoélectrique; Wave-particle duality :: Dualité onde-particule; Atomic line spectra :: Spectres de raies atomiques; Current and charge :: Courant et charge; Potential difference and resistance :: Différence de potentiel et résistance; Resistivity :: Résistivité; Series and parallel circuits :: Circuits en série et en parallèle; Potential dividers :: Diviseurs de tension; E.m.f. and internal resistance :: F.é.m. et résistance interne
# Unit 3: Practical Skills in Physics I :: Unité 3 : compétences pratiques en physique I
Planning experiments :: Planifier des expériences; Measurements and uncertainties :: Mesures et incertitudes; Analysing data :: Analyser des données; Evaluating experiments :: Évaluer des expériences` },
a: { en: "Pearson Edexcel International A Level Physics", fr: "Physique – A-Level international Pearson Edexcel", code: "YPH11", text: `
# Unit 4: Further Mechanics, Fields and Particles :: Unité 4 : mécanique avancée, champs et particules
Momentum in two dimensions :: Quantité de mouvement en deux dimensions; Circular motion :: Mouvement circulaire; Electric fields :: Champs électriques; Capacitors :: Condensateurs; Magnetic fields :: Champs magnétiques; Electromagnetic induction :: Induction électromagnétique; Alternating currents :: Courants alternatifs; Particle accelerators and detectors :: Accélérateurs et détecteurs de particules; Particle physics and the Standard Model :: Physique des particules et modèle standard
# Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology :: Unité 5 : thermodynamique, rayonnement, oscillations et cosmologie
Thermal energy and temperature :: Énergie thermique et température; Ideal gases and kinetic theory :: Gaz parfaits et théorie cinétique; Black-body radiation :: Rayonnement du corps noir; Nuclear decay and half-life :: Désintégration nucléaire et demi-vie; Binding energy, fission and fusion :: Énergie de liaison, fission et fusion; Gravitational fields :: Champs gravitationnels; Stellar distances and the H-R diagram :: Distances stellaires et diagramme H-R; Cosmology :: Cosmologie; Simple harmonic motion :: Mouvement harmonique simple; Damping and resonance :: Amortissement et résonance
# Unit 6: Practical Skills in Physics II :: Unité 6 : compétences pratiques en physique II
Planning advanced experiments :: Planifier des expériences avancées; Logarithmic graphs :: Graphiques logarithmiques; Uncertainty analysis :: Analyse des incertitudes; Evaluating conclusions :: Évaluer des conclusions` },
},
aqa: {
as: { en: "OxfordAQA International AS Level Physics", fr: "Physique – AS-Level international OxfordAQA", code: "9630", text: `
# Measurements and their errors :: Mesures et erreurs
Use of SI units and their prefixes :: Unités SI et préfixes; Limitation of physical measurements :: Limites des mesures physiques; Estimation of physical quantities :: Estimation de grandeurs physiques
# Mechanics and materials :: Mécanique et matériaux
Scalars and vectors :: Scalaires et vecteurs; Moments :: Moments; Motion along a straight line :: Mouvement rectiligne; Projectile motion :: Mouvement des projectiles; Newton's laws of motion :: Lois du mouvement de Newton; Momentum :: Quantité de mouvement; Work, energy and power :: Travail, énergie et puissance; Conservation of energy :: Conservation de l'énergie; Bulk properties of solids :: Propriétés mécaniques des solides; The Young modulus :: Le module de Young
# Particles, radiation and radioactivity :: Particules, rayonnement et radioactivité
Constituents of the atom :: Constituants de l'atome; Elementary particles :: Particules élémentaires; Radioactivity :: Radioactivité
# Electricity :: Électricité
Basics of electricity :: Bases de l'électricité; Current-voltage characteristics :: Caractéristiques courant-tension; Resistivity :: Résistivité; Circuits :: Circuits; Potential divider :: Diviseur de tension; Electromotive force and internal resistance :: Force électromotrice et résistance interne
# Oscillations and waves :: Oscillations et ondes
Oscillating systems :: Systèmes oscillants; Forced vibrations and resonance :: Vibrations forcées et résonance; Progressive waves :: Ondes progressives; Longitudinal and transverse waves :: Ondes longitudinales et transversales; Superposition and stationary waves :: Superposition et ondes stationnaires; Interference :: Interférences; Diffraction :: Diffraction; Refraction at a plane surface :: Réfraction sur une surface plane; Collisions of electrons with atoms :: Collisions d'électrons avec des atomes; Photoelectric effect :: Effet photoélectrique; Wave particle duality :: Dualité onde-particule` },
a: { en: "OxfordAQA International A Level Physics", fr: "Physique – A-Level international OxfordAQA", code: "9630", text: `
# Circular and periodic motion :: Mouvement circulaire et périodique
Circular motion :: Mouvement circulaire; Simple harmonic motion :: Mouvement harmonique simple
# Gravitational fields and satellites :: Champs gravitationnels et satellites
Newton's gravitational law :: Loi de la gravitation de Newton; Gravitational field strength :: Intensité du champ gravitationnel; Gravitational potential :: Potentiel gravitationnel; Orbits of planets and satellites :: Orbites des planètes et des satellites
# Electric fields and capacitance :: Champs électriques et capacité
Coulomb's law :: Loi de Coulomb; Electric field strength :: Intensité du champ électrique; Electric potential :: Potentiel électrique; Capacitors :: Condensateurs
# Exponential change :: Variation exponentielle
Capacitor charge and discharge :: Charge et décharge d'un condensateur; Exponential changes in radioactivity :: Variations exponentielles en radioactivité
# Magnetic fields :: Champs magnétiques
Magnetic flux density :: Densité de flux magnétique; Moving charges in a magnetic field :: Charges en mouvement dans un champ magnétique; Magnetic flux and flux linkage :: Flux magnétique et flux embrassé; Electromagnetic induction :: Induction électromagnétique; Alternating currents :: Courants alternatifs; The operation of a transformer :: Fonctionnement d'un transformateur
# Thermal physics :: Physique thermique
Energy transfer by heating and doing work :: Transfert d'énergie par chauffage et par travail; Energy transfer by conduction :: Transfert d'énergie par conduction; Ideal gases :: Gaz parfaits; Kinetic theory of gases :: Théorie cinétique des gaz
# Nuclear energy :: Énergie nucléaire
Radius of the nucleus :: Rayon du noyau; Mass and energy :: Masse et énergie; Induced fission :: Fission induite; Safety aspects of nuclear reactors :: Sécurité des réacteurs nucléaires; Nuclear fusion :: Fusion nucléaire
# Energy sources :: Sources d'énergie
Rotational motion :: Mouvement de rotation; Wind energy :: Énergie éolienne; Solar energy :: Énergie solaire; Hydroelectric power and pumped storage :: Hydroélectricité et stockage par pompage` },
},
},

chemistry: {
cambridge: {
as: { en: "Cambridge International AS Level Chemistry", fr: "Chimie – AS-Level international Cambridge", code: "9701", text: `
# 1. Atomic structure :: 1. Structure atomique
Particles in the atom and atomic radius :: Particules de l'atome et rayon atomique; Isotopes :: Isotopes; Electrons, energy levels and atomic orbitals :: Électrons, niveaux d'énergie et orbitales atomiques; Ionisation energy :: Énergie d'ionisation
# 2. Atoms, molecules and stoichiometry :: 2. Atomes, molécules et stœchiométrie
Relative masses of atoms and molecules :: Masses relatives des atomes et des molécules; The mole and the Avogadro constant :: La mole et la constante d'Avogadro; Formulas :: Formules; Reacting masses and volumes :: Masses et volumes réactionnels
# 3. Chemical bonding :: 3. Liaison chimique
Electronegativity and bonding :: Électronégativité et liaison; Ionic bonding :: Liaison ionique; Metallic bonding :: Liaison métallique; Covalent bonding and coordinate bonding :: Liaison covalente et liaison de coordination; Shapes of molecules :: Géométrie des molécules; Intermolecular forces, electronegativity and bond properties :: Forces intermoléculaires, électronégativité et propriétés des liaisons; Dot-and-cross diagrams :: Schémas points-croix
# 4. States of matter :: 4. États de la matière
The gaseous state: ideal and real gases and pV = nRT :: L'état gazeux : gaz parfaits, gaz réels et pV = nRT; Bonding and structure :: Liaisons et structure
# 5. Chemical energetics :: 5. Énergétique chimique
Enthalpy change :: Variation d'enthalpie; Hess's law :: Loi de Hess
# 6. Electrochemistry :: 6. Électrochimie
Redox processes: electron transfer and changes in oxidation number :: Oxydoréduction : transfert d'électrons et nombres d'oxydation
# 7. Equilibria :: 7. Équilibres
Chemical equilibria: reversible reactions and dynamic equilibrium :: Équilibres chimiques : réactions réversibles et équilibre dynamique; Brønsted-Lowry theory of acids and bases :: Théorie de Brønsted-Lowry des acides et des bases
# 8. Reaction kinetics :: 8. Cinétique des réactions
Rate of reaction :: Vitesse de réaction; Effect of temperature on reaction rates :: Effet de la température sur les vitesses; Homogeneous and heterogeneous catalysts :: Catalyseurs homogènes et hétérogènes
# 9. The Periodic Table: chemical periodicity :: 9. Le tableau périodique : périodicité chimique
Periodicity of physical properties in Period 3 :: Périodicité des propriétés physiques en période 3; Periodicity of chemical properties in Period 3 :: Périodicité des propriétés chimiques en période 3; Chemical periodicity of other elements :: Périodicité chimique d'autres éléments
# 10. Group 2 :: 10. Groupe 2
Physical and chemical properties of Group 2 elements :: Propriétés physiques et chimiques des éléments du groupe 2
# 11. Group 17 :: 11. Groupe 17
Physical properties of the Group 17 elements :: Propriétés physiques des éléments du groupe 17; Chemical properties of the Group 17 elements :: Propriétés chimiques des éléments du groupe 17; Some reactions of the halide ions :: Quelques réactions des ions halogénure; The reactions of chlorine :: Les réactions du chlore
# 12. Nitrogen and sulfur :: 12. Azote et soufre
Nitrogen and sulfur :: Azote et soufre
# 13. An introduction to AS Level organic chemistry :: 13. Introduction à la chimie organique de l'AS-Level
Formulas, functional groups and naming :: Formules, groupes fonctionnels et nomenclature; Characteristic organic reactions :: Réactions organiques caractéristiques; Shapes of organic molecules :: Géométrie des molécules organiques; Isomerism: structural isomerism and stereoisomerism :: Isomérie : isomérie de structure et stéréoisomérie
# 14. Hydrocarbons :: 14. Hydrocarbures
Alkanes :: Alcanes; Alkenes :: Alcènes
# 15. Halogen compounds :: 15. Composés halogénés
Halogenoalkanes :: Halogénoalcanes
# 16. Hydroxy compounds :: 16. Composés hydroxylés
Alcohols :: Alcools
# 17. Carbonyl compounds :: 17. Composés carbonylés
Aldehydes and ketones :: Aldéhydes et cétones
# 18. Carboxylic acids and derivatives :: 18. Acides carboxyliques et dérivés
Carboxylic acids :: Acides carboxyliques; Esters :: Esters
# 19. Nitrogen compounds :: 19. Composés azotés
Primary amines :: Amines primaires; Nitriles and hydroxynitriles :: Nitriles et hydroxynitriles
# 20. Polymerisation :: 20. Polymérisation
Addition polymerisation :: Polymérisation par addition
# 21. Organic synthesis :: 21. Synthèse organique
Organic synthesis :: Synthèse organique
# 22. Analytical techniques :: 22. Techniques d'analyse
Infrared spectroscopy :: Spectroscopie infrarouge; Mass spectrometry :: Spectrométrie de masse` },
a: { en: "Cambridge International A Level Chemistry", fr: "Chimie – A-Level international Cambridge", code: "9701", text: `
# 23. Chemical energetics :: 23. Énergétique chimique
Lattice energy and Born-Haber cycles :: Énergie réticulaire et cycles de Born-Haber; Enthalpies of solution and hydration :: Enthalpies de dissolution et d'hydratation; Entropy change :: Variation d'entropie; Gibbs free energy change :: Variation d'enthalpie libre de Gibbs
# 24. Electrochemistry :: 24. Électrochimie
Electrolysis :: Électrolyse; Standard electrode potentials and cell potentials :: Potentiels standard d'électrode et potentiels de pile
# 25. Equilibria :: 25. Équilibres
Acids and bases :: Acides et bases; Partition coefficients :: Coefficients de partage
# 26. Reaction kinetics :: 26. Cinétique des réactions
Simple rate equations, orders of reaction and rate constants :: Lois de vitesse simples, ordres de réaction et constantes de vitesse; Homogeneous and heterogeneous catalysts :: Catalyseurs homogènes et hétérogènes
# 27. Group 2 :: 27. Groupe 2
Similarities and trends in the properties of Group 2 compounds :: Similitudes et tendances des composés du groupe 2
# 28. Chemistry of transition elements :: 28. Chimie des éléments de transition
General physical and chemical properties of the first row of transition elements :: Propriétés générales de la première série de transition; General characteristic chemical properties of the first row :: Propriétés chimiques caractéristiques de la première série; Colour of complexes :: Couleur des complexes; Stereoisomerism in transition element complexes :: Stéréoisomérie des complexes de transition; Stability constants :: Constantes de stabilité
# 29. An introduction to A Level organic chemistry :: 29. Introduction à la chimie organique de l'A-Level
Formulas, functional groups and naming :: Formules, groupes fonctionnels et nomenclature; Characteristic organic reactions :: Réactions organiques caractéristiques; Shapes of aromatic organic molecules :: Géométrie des molécules aromatiques; Isomerism: optical :: Isomérie optique
# 30. Hydrocarbons :: 30. Hydrocarbures
Arenes :: Arènes
# 31. Halogen compounds :: 31. Composés halogénés
Halogen compounds :: Composés halogénés
# 32. Hydroxy compounds :: 32. Composés hydroxylés
Alcohols :: Alcools; Phenol :: Phénol
# 33. Carboxylic acids and derivatives :: 33. Acides carboxyliques et dérivés
Carboxylic acids :: Acides carboxyliques; Esters :: Esters; Acyl chlorides :: Chlorures d'acyle
# 34. Nitrogen compounds :: 34. Composés azotés
Primary and secondary amines :: Amines primaires et secondaires; Phenylamine and azo compounds :: Phénylamine et composés azoïques; Amides :: Amides; Amino acids :: Acides aminés
# 35. Polymerisation :: 35. Polymérisation
Condensation polymerisation :: Polymérisation par condensation; Predicting the type of polymerisation :: Prévoir le type de polymérisation; Degradable polymers :: Polymères dégradables
# 36. Organic synthesis :: 36. Synthèse organique
Organic synthesis :: Synthèse organique
# 37. Analytical techniques :: 37. Techniques d'analyse
Thin-layer chromatography :: Chromatographie sur couche mince; Gas/liquid chromatography :: Chromatographie gaz-liquide; Carbon-13 NMR spectroscopy :: Spectroscopie RMN du carbone 13; Proton NMR spectroscopy :: Spectroscopie RMN du proton` },
},
edexcel: {
as: { en: "Pearson Edexcel International AS Level Chemistry", fr: "Chimie – AS-Level international Pearson Edexcel", code: "XCH11", text: `
# Topic 1: Formulae, Equations and Amount of Substance :: Thème 1 : formules, équations et quantité de matière
Atoms, elements, ions and molecules :: Atomes, éléments, ions et molécules; Chemical formulae and equations :: Formules et équations chimiques; The mole and the Avogadro constant :: La mole et la constante d'Avogadro; Reacting masses and gas volumes :: Masses réactionnelles et volumes de gaz; Concentration and yield :: Concentration et rendement
# Topic 2: Atomic Structure and the Periodic Table :: Thème 2 : structure atomique et tableau périodique
Atomic structure and isotopes :: Structure atomique et isotopes; Mass spectrometry :: Spectrométrie de masse; Electronic configuration and ionisation energy :: Configuration électronique et énergie d'ionisation; Periodicity :: Périodicité
# Topic 3: Bonding and Structure :: Thème 3 : liaisons et structure
Ionic bonding :: Liaison ionique; Covalent bonding :: Liaison covalente; Shapes of molecules :: Géométrie des molécules; Metallic bonding :: Liaison métallique; Giant lattices and properties :: Réseaux géants et propriétés
# Topic 4: Introductory Organic Chemistry and Alkanes :: Thème 4 : introduction à la chimie organique et alcanes
Introduction to organic chemistry :: Introduction à la chimie organique; Isomerism :: Isomérie; Alkanes and crude oil :: Alcanes et pétrole brut; Fuels and pollution :: Combustibles et pollution; Radical substitution :: Substitution radicalaire
# Topic 5: Alkenes :: Thème 5 : alcènes
Structure of alkenes :: Structure des alcènes; Reactions of alkenes :: Réactions des alcènes; Addition polymers :: Polymères d'addition
# Topic 6: Energetics :: Thème 6 : énergétique
Enthalpy changes :: Variations d'enthalpie; Hess's law :: Loi de Hess; Bond enthalpies :: Enthalpies de liaison
# Topic 7: Intermolecular Forces :: Thème 7 : forces intermoléculaires
Electronegativity and polarity :: Électronégativité et polarité; Types of intermolecular force :: Types de forces intermoléculaires; Solubility and physical properties :: Solubilité et propriétés physiques
# Topic 8: Redox Chemistry and Groups 1, 2 and 7 :: Thème 8 : oxydoréduction et groupes 1, 2 et 7
Redox and oxidation numbers :: Oxydoréduction et nombres d'oxydation; The elements of Groups 1 and 2 :: Les éléments des groupes 1 et 2; The elements of Group 7 :: Les éléments du groupe 7; Analysis of inorganic compounds :: Analyse de composés inorganiques
# Topic 9: Introduction to Kinetics and Equilibria :: Thème 9 : introduction à la cinétique et aux équilibres
Reaction rates and collision theory :: Vitesses de réaction et théorie des collisions; Catalysts :: Catalyseurs; Dynamic equilibrium :: Équilibre dynamique
# Topic 10: Organic Chemistry: Halogenoalkanes, Alcohols and Spectra :: Thème 10 : chimie organique : halogénoalcanes, alcools et spectres
Halogenoalkanes :: Halogénoalcanes; Alcohols :: Alcools; Mass spectra and infrared spectra :: Spectres de masse et spectres infrarouges
# Unit 3: Practical Skills in Chemistry I :: Unité 3 : compétences pratiques en chimie I
Qualitative observations :: Observations qualitatives; Titrations and quantitative work :: Titrages et travaux quantitatifs; Organic practical techniques :: Techniques pratiques organiques; Evaluating experiments :: Évaluer des expériences` },
a: { en: "Pearson Edexcel International A Level Chemistry", fr: "Chimie – A-Level international Pearson Edexcel", code: "YCH11", text: `
# Topic 11: Kinetics :: Thème 11 : cinétique
Rate equations :: Lois de vitesse; Determining orders of reaction :: Déterminer les ordres de réaction; Reaction mechanisms and activation energy :: Mécanismes réactionnels et énergie d'activation
# Topic 12: Entropy and Energetics :: Thème 12 : entropie et énergétique
Entropy :: Entropie; Lattice energy and Born-Haber cycles :: Énergie réticulaire et cycles de Born-Haber; Enthalpies of solution and hydration :: Enthalpies de dissolution et d'hydratation; Gibbs free energy :: Enthalpie libre de Gibbs
# Topic 13: Chemical Equilibria :: Thème 13 : équilibres chimiques
Equilibrium constants Kc and Kp :: Constantes d'équilibre Kc et Kp; Factors affecting equilibrium constants :: Facteurs influençant les constantes d'équilibre
# Topic 14: Acid-base Equilibria :: Thème 14 : équilibres acido-basiques
Acids, bases and pH :: Acides, bases et pH; Strong and weak acids :: Acides forts et faibles; Titration curves and indicators :: Courbes de titrage et indicateurs; Buffer solutions :: Solutions tampons
# Topic 15: Organic Chemistry: Carbonyls, Carboxylic Acids and Chirality :: Thème 15 : chimie organique : carbonylés, acides carboxyliques et chiralité
Chirality :: Chiralité; Carbonyl compounds :: Composés carbonylés; Carboxylic acids :: Acides carboxyliques; Carboxylic acid derivatives :: Dérivés d'acides carboxyliques; Spectroscopy and chromatography :: Spectroscopie et chromatographie
# Topic 16: Redox Equilibria :: Thème 16 : équilibres d'oxydoréduction
Standard electrode potentials :: Potentiels standard d'électrode; Redox titrations :: Titrages d'oxydoréduction; Fuel cells :: Piles à combustible
# Topic 17: Transition Metals and their Chemistry :: Thème 17 : les métaux de transition et leur chimie
Electronic configurations and complex ions :: Configurations électroniques et ions complexes; Shapes and colours of complexes :: Géométrie et couleur des complexes; Ligand exchange and redox reactions :: Échange de ligands et oxydoréduction; Transition metals as catalysts :: Les métaux de transition comme catalyseurs
# Topic 18: Organic Chemistry: Arenes :: Thème 18 : chimie organique : arènes
Benzene and its structure :: Le benzène et sa structure; Electrophilic substitution :: Substitution électrophile; Phenol :: Phénol
# Topic 19: Organic Nitrogen Compounds :: Thème 19 : composés organiques azotés
Amines :: Amines; Amides :: Amides; Amino acids :: Acides aminés; Peptides, proteins and polyamides :: Peptides, protéines et polyamides
# Topic 20: Organic Synthesis :: Thème 20 : synthèse organique
Organic synthesis routes :: Voies de synthèse organique; Grignard reagents :: Réactifs de Grignard; Practical organic techniques :: Techniques pratiques organiques
# Unit 6: Practical Skills in Chemistry II :: Unité 6 : compétences pratiques en chimie II
Advanced qualitative analysis :: Analyse qualitative avancée; Advanced quantitative work :: Travaux quantitatifs avancés; Preparation and purification :: Préparation et purification; Evaluating procedures :: Évaluer des protocoles` },
},
aqa: {
as: { en: "OxfordAQA International AS Level Chemistry", fr: "Chimie – AS-Level international OxfordAQA", code: "9620", text: `
# Physical chemistry :: Chimie physique
Atomic structure :: Structure atomique; Amount of substance :: Quantité de matière; Bonding :: Liaisons; Energetics :: Énergétique; Oxidation, reduction and redox equations :: Oxydation, réduction et équations d'oxydoréduction; Kinetics :: Cinétique; Chemical equilibria, Le Chatelier's principle and Kc :: Équilibres chimiques, principe de Le Chatelier et Kc
# Inorganic chemistry :: Chimie inorganique
Periodicity :: Périodicité; Group 2, the alkaline earth metals :: Groupe 2, les métaux alcalino-terreux; Group 7(17), the halogens :: Groupe 7(17), les halogènes
# Organic chemistry :: Chimie organique
Introduction to organic chemistry :: Introduction à la chimie organique; Alkanes :: Alcanes; Halogenoalkanes :: Halogénoalcanes; Alkenes :: Alcènes; Alcohols :: Alcools; Organic analysis :: Analyse organique` },
a: { en: "OxfordAQA International A Level Chemistry", fr: "Chimie – A-Level international OxfordAQA", code: "9620", text: `
# Physical chemistry :: Chimie physique
Thermodynamics :: Thermodynamique; Electrode potentials and electrochemical cells :: Potentiels d'électrode et piles électrochimiques; Acids and bases :: Acides et bases; Rate equations :: Lois de vitesse; Equilibrium constant Kp for homogeneous systems :: Constante d'équilibre Kp des systèmes homogènes
# Inorganic chemistry :: Chimie inorganique
Properties of Period 3 elements and their oxides :: Propriétés des éléments de la période 3 et de leurs oxydes; Transition metals :: Métaux de transition; Reactions of ions in aqueous solution :: Réactions des ions en solution aqueuse
# Organic chemistry :: Chimie organique
Optical isomerism :: Isomérie optique; Aldehydes and ketones :: Aldéhydes et cétones; Carboxylic acids and derivatives :: Acides carboxyliques et dérivés; Aromatic chemistry :: Chimie aromatique; Amines :: Amines; Polymers :: Polymères; Amino acids and proteins :: Acides aminés et protéines; Organic synthesis :: Synthèse organique; Nuclear magnetic resonance spectroscopy :: Spectroscopie de résonance magnétique nucléaire; Chromatography :: Chromatographie` },
},
},

biology: {
cambridge: {
as: { en: "Cambridge International AS Level Biology", fr: "Biologie – AS-Level international Cambridge", code: "9700", text: `
# 1. Cell structure :: 1. Structure de la cellule
The microscope in cell studies :: Le microscope dans l'étude des cellules; Cells as the basic units of living organisms :: Les cellules, unités de base du vivant
# 2. Biological molecules :: 2. Molécules biologiques
Testing for biological molecules :: Tests des molécules biologiques; Carbohydrates and lipids :: Glucides et lipides; Proteins :: Protéines; Water :: Eau
# 3. Enzymes :: 3. Enzymes
Mode of action of enzymes :: Mode d'action des enzymes; Factors that affect enzyme action :: Facteurs influençant l'action des enzymes
# 4. Cell membranes and transport :: 4. Membranes cellulaires et transport
Fluid mosaic membranes :: Modèle de la mosaïque fluide; Movement into and out of cells :: Entrées et sorties des cellules
# 5. The mitotic cell cycle :: 5. Le cycle cellulaire mitotique
Replication and division of nuclei and cells :: Réplication et division des noyaux et des cellules; Chromosome behaviour in mitosis :: Comportement des chromosomes pendant la mitose
# 6. Nucleic acids and protein synthesis :: 6. Acides nucléiques et synthèse des protéines
Structure of nucleic acids and replication of DNA :: Structure des acides nucléiques et réplication de l'ADN; Protein synthesis :: Synthèse des protéines
# 7. Transport in plants :: 7. Transport chez les plantes
Structure of transport tissues :: Structure des tissus conducteurs; Transport mechanisms :: Mécanismes de transport
# 8. Transport in mammals :: 8. Transport chez les mammifères
The circulatory system :: Le système circulatoire; Transport of oxygen and carbon dioxide :: Transport du dioxygène et du dioxyde de carbone; The heart :: Le cœur
# 9. Gas exchange :: 9. Échanges gazeux
The gas exchange system :: Le système d'échanges gazeux
# 10. Infectious diseases :: 10. Maladies infectieuses
Infectious diseases :: Maladies infectieuses; Antibiotics :: Antibiotiques
# 11. Immunity :: 11. Immunité
The immune system :: Le système immunitaire; Antibodies and vaccination :: Anticorps et vaccination` },
a: { en: "Cambridge International A Level Biology", fr: "Biologie – A-Level international Cambridge", code: "9700", text: `
# 12. Energy and respiration :: 12. Énergie et respiration
Energy :: Énergie; Respiration :: Respiration
# 13. Photosynthesis :: 13. Photosynthèse
Photosynthesis as an energy transfer process :: La photosynthèse, un transfert d'énergie; Investigation of limiting factors :: Étude des facteurs limitants
# 14. Homeostasis :: 14. Homéostasie
Homeostasis in mammals :: Homéostasie chez les mammifères; Homeostasis in plants :: Homéostasie chez les plantes
# 15. Control and coordination :: 15. Contrôle et coordination
Control and coordination in mammals :: Contrôle et coordination chez les mammifères; Control and coordination in plants :: Contrôle et coordination chez les plantes
# 16. Inheritance :: 16. Hérédité
Passage of information from parent to offspring :: Transmission de l'information des parents à la descendance; The roles of genes in determining the phenotype :: Rôle des gènes dans le phénotype; Gene control :: Contrôle des gènes
# 17. Selection and evolution :: 17. Sélection et évolution
Variation :: Variation; Natural and artificial selection :: Sélection naturelle et artificielle; Evolution :: Évolution
# 18. Classification, biodiversity and conservation :: 18. Classification, biodiversité et conservation
Classification :: Classification; Biodiversity :: Biodiversité; Conservation :: Conservation
# 19. Genetic technology :: 19. Technologies génétiques
Principles of genetic technology :: Principes des technologies génétiques; Genetic technology applied to medicine :: Technologies génétiques appliquées à la médecine; Genetically modified organisms in agriculture :: Organismes génétiquement modifiés en agriculture` },
},
edexcel: {
as: { en: "Pearson Edexcel International AS Level Biology", fr: "Biologie – AS-Level international Pearson Edexcel", code: "XBI11", text: `
# Topic 1: Molecules, Transport and Health :: Thème 1 : molécules, transport et santé
Water and its properties :: L'eau et ses propriétés; Carbohydrates :: Glucides; Lipids :: Lipides; Mass transport and the circulatory system :: Transport de masse et système circulatoire; The heart and the cardiac cycle :: Le cœur et le cycle cardiaque; Blood clotting and atherosclerosis :: Coagulation sanguine et athérosclérose; Cardiovascular disease and risk :: Maladies cardiovasculaires et risques; Diet and energy balance :: Alimentation et bilan énergétique
# Topic 2: Membranes, Proteins, DNA and Gene Expression :: Thème 2 : membranes, protéines, ADN et expression des gènes
Cell membranes and transport :: Membranes cellulaires et transport; Gas exchange :: Échanges gazeux; Proteins and enzymes :: Protéines et enzymes; DNA structure and replication :: Structure et réplication de l'ADN; Protein synthesis and the genetic code :: Synthèse des protéines et code génétique; Mutations and inheritance :: Mutations et hérédité; Cystic fibrosis and genetic screening :: Mucoviscidose et dépistage génétique
# Topic 3: Cell Structure, Reproduction and Development :: Thème 3 : structure cellulaire, reproduction et développement
Eukaryotic and prokaryotic cells :: Cellules eucaryotes et procaryotes; Microscopy :: Microscopie; The cell cycle and mitosis :: Le cycle cellulaire et la mitose; Meiosis and gametes :: Méiose et gamètes; Fertilisation in animals and plants :: Fécondation chez les animaux et les plantes; Stem cells and cell specialisation :: Cellules souches et spécialisation cellulaire; Gene expression and the environment :: Expression des gènes et environnement
# Topic 4: Plant Structure and Function, Biodiversity and Conservation :: Thème 4 : structure et fonctions des plantes, biodiversité et conservation
Plant cells and cell walls :: Cellules végétales et parois; Plant transport tissues :: Tissus conducteurs des plantes; Plant fibres and uses :: Fibres végétales et usages; Drug testing and medicinal plants :: Essais de médicaments et plantes médicinales; Biodiversity and adaptation :: Biodiversité et adaptation; Classification :: Classification; Conservation :: Conservation
# Unit 3: Practical Skills in Biology I :: Unité 3 : compétences pratiques en biologie I
Planning investigations :: Planifier des investigations; Data analysis and statistics :: Analyse de données et statistiques; Evaluating experiments :: Évaluer des expériences` },
a: { en: "Pearson Edexcel International A Level Biology", fr: "Biologie – A-Level international Pearson Edexcel", code: "YBI11", text: `
# Topic 5: Energy Flow, Ecosystems and the Environment :: Thème 5 : flux d'énergie, écosystèmes et environnement
Photosynthesis :: Photosynthèse; Energy transfer in ecosystems :: Transfert d'énergie dans les écosystèmes; Ecosystems and succession :: Écosystèmes et succession; Climate change :: Changement climatique; Evolution and speciation :: Évolution et spéciation
# Topic 6: Microbiology, Immunity and Forensics :: Thème 6 : microbiologie, immunité et police scientifique
DNA profiling and forensics :: Empreintes génétiques et police scientifique; Microbial growth :: Croissance microbienne; Bacteria and viruses :: Bactéries et virus; Pathogens and infection :: Agents pathogènes et infection; The immune response :: La réponse immunitaire; Antibiotics and resistance :: Antibiotiques et résistance
# Topic 7: Respiration, Muscles and the Internal Environment :: Thème 7 : respiration, muscles et milieu intérieur
Aerobic and anaerobic respiration :: Respiration aérobie et anaérobie; Muscles and movement :: Muscles et mouvement; The heart and exercise :: Le cœur et l'exercice; Homeostasis and temperature control :: Homéostasie et thermorégulation; The kidney :: Le rein; Hormones and gene expression :: Hormones et expression des gènes
# Topic 8: Coordination, Response and Gene Technology :: Thème 8 : coordination, réponse et technologies génétiques
Nerve impulses and synapses :: Influx nerveux et synapses; The eye and sensory response :: L'œil et la réponse sensorielle; Plant responses :: Réponses des plantes; The brain and brain imaging :: Le cerveau et l'imagerie cérébrale; Learning and neurotransmitters :: Apprentissage et neurotransmetteurs; Gene technology :: Technologies génétiques
# Unit 6: Practical Skills in Biology II :: Unité 6 : compétences pratiques en biologie II
Designing investigations :: Concevoir des investigations; Statistical tests :: Tests statistiques; Interpreting results :: Interpréter les résultats; Evaluating data :: Évaluer des données` },
},
aqa: {
as: { en: "OxfordAQA International AS Level Biology", fr: "Biologie – AS-Level international OxfordAQA", code: "9610", text: `
# Unit 1: The diversity of living organisms :: Unité 1 : la diversité des êtres vivants
Biological molecules :: Molécules biologiques; Cells and cell structure :: Cellules et structure cellulaire; Biochemical reactions in cells are controlled by enzymes :: Les enzymes contrôlent les réactions biochimiques des cellules; Transport into and out of cells :: Entrées et sorties des cellules; Gas exchange and the transport of oxygen in living organisms :: Échanges gazeux et transport du dioxygène chez les êtres vivants; Living organisms vary :: Les êtres vivants varient; DNA, genes and chromosomes :: ADN, gènes et chromosomes; Protein synthesis :: Synthèse des protéines; Genetic diversity may arise by meiosis :: La méiose peut créer de la diversité génétique; Species and taxonomy :: Espèces et taxonomie; Biodiversity within a community :: Biodiversité au sein d'une communauté
# Unit 2: Biological systems and disease :: Unité 2 : systèmes biologiques et maladies
The causes of disease: pathogens, lifestyle and genes :: Les causes des maladies : pathogènes, mode de vie et gènes; Digestion and absorption :: Digestion et absorption; Cholera :: Choléra; HIV as an example of a human disease caused by a virus :: Le VIH, exemple de maladie humaine causée par un virus; The defensive functions of mammalian blood :: Les fonctions de défense du sang des mammifères; The circulation of blood and the structure of the mammalian heart :: La circulation sanguine et la structure du cœur des mammifères; Heart disease may be associated with specific risk factors :: Les maladies cardiaques peuvent être liées à des facteurs de risque; Mass transport systems in plants :: Systèmes de transport de masse chez les plantes; The role of aphids in spreading plant viruses :: Le rôle des pucerons dans la propagation des virus des plantes; Cells divide by binary fission and mitosis :: Les cellules se divisent par scissiparité et mitose; Mutation and cancer :: Mutation et cancer` },
a: { en: "OxfordAQA International A Level Biology", fr: "Biologie – A-Level international OxfordAQA", code: "9610", text: `
# Unit 3: Populations and genes :: Unité 3 : populations et gènes
The effect of biotic and abiotic factors on populations :: Effet des facteurs biotiques et abiotiques sur les populations; Photosynthesis :: Photosynthèse; Respiration :: Respiration; Energy transfer through ecosystems :: Transfert d'énergie dans les écosystèmes; Nutrient cycles :: Cycles des nutriments; Inheritance :: Hérédité; Allele frequencies in populations :: Fréquences alléliques dans les populations; Evolution may lead to speciation :: L'évolution peut conduire à la spéciation
# Unit 4: Control :: Unité 4 : contrôle
Control systems involve stimulus and response :: Les systèmes de contrôle reposent sur un stimulus et une réponse; Receptors :: Récepteurs; Nerve impulses and synaptic transmission :: Influx nerveux et transmission synaptique; Skeletal muscles as effectors :: Les muscles squelettiques comme effecteurs; Control systems in plants :: Systèmes de contrôle chez les plantes; Homeostasis and negative feedback :: Homéostasie et rétroaction négative; Hormones and the control of blood glucose concentration :: Hormones et contrôle de la glycémie; Control of heart rate :: Contrôle de la fréquence cardiaque; Regulation of transcription and translation :: Régulation de la transcription et de la traduction; Recombinant DNA technology :: Technologie de l'ADN recombinant` },
},
},

cs: {
cambridge: {
as: { en: "Cambridge International AS Level Computer Science", fr: "Informatique – AS-Level international Cambridge", code: "9618", text: `
# 1. Information representation :: 1. Représentation de l'information
Data representation :: Représentation des données; Multimedia: graphics and sound :: Multimédia : images et son; Compression :: Compression
# 2. Communication :: 2. Communication
Networks including the internet :: Réseaux, dont Internet
# 3. Hardware :: 3. Matériel
Computers and their components :: Les ordinateurs et leurs composants; Logic gates and logic circuits :: Portes et circuits logiques
# 4. Processor fundamentals :: 4. Bases du processeur
Central Processing Unit (CPU) architecture :: Architecture du processeur (CPU); Assembly language :: Langage d'assemblage; Bit manipulation :: Manipulation de bits
# 5. System software :: 5. Logiciels système
Operating systems :: Systèmes d'exploitation; Language translators :: Traducteurs de langage
# 6. Security, privacy and data integrity :: 6. Sécurité, confidentialité et intégrité des données
Data security :: Sécurité des données; Data integrity :: Intégrité des données
# 7. Ethics and ownership :: 7. Éthique et propriété
Ethics and ownership :: Éthique et propriété
# 8. Databases :: 8. Bases de données
Database concepts :: Notions de bases de données; Database management systems (DBMS) :: Systèmes de gestion de bases de données (SGBD); Data definition language and data manipulation language :: Langages de définition et de manipulation de données
# 9. Algorithm design and problem-solving :: 9. Conception d'algorithmes et résolution de problèmes
Computational thinking skills :: Compétences de pensée informatique; Algorithms :: Algorithmes
# 10. Data types and structures :: 10. Types et structures de données
Data types and records :: Types de données et enregistrements; Arrays :: Tableaux; Files :: Fichiers; Introduction to abstract data types :: Introduction aux types abstraits de données
# 11. Programming :: 11. Programmation
Programming basics :: Bases de la programmation; Constructs :: Structures de contrôle; Structured programming :: Programmation structurée
# 12. Software development :: 12. Développement logiciel
Program development life cycle :: Cycle de développement d'un programme; Program design :: Conception de programmes; Program testing and maintenance :: Tests et maintenance des programmes` },
a: { en: "Cambridge International A Level Computer Science", fr: "Informatique – A-Level international Cambridge", code: "9618", text: `
# 13. Data representation :: 13. Représentation des données
User-defined data types :: Types de données définis par l'utilisateur; File organisation and access :: Organisation et accès aux fichiers; Floating-point numbers, representation and manipulation :: Nombres à virgule flottante : représentation et manipulation
# 14. Communication and internet technologies :: 14. Communication et technologies d'Internet
Protocols :: Protocoles; Circuit switching and packet switching :: Commutation de circuits et de paquets
# 15. Hardware and virtual machines :: 15. Matériel et machines virtuelles
Processors, parallel processing and virtual machines :: Processeurs, traitement parallèle et machines virtuelles; Boolean algebra and logic circuits :: Algèbre de Boole et circuits logiques
# 16. System software :: 16. Logiciels système
Purposes of an operating system :: Rôles d'un système d'exploitation; Translation software :: Logiciels de traduction
# 17. Security :: 17. Sécurité
Encryption, encryption protocols and digital certificates :: Chiffrement, protocoles de chiffrement et certificats numériques
# 18. Artificial intelligence :: 18. Intelligence artificielle
Artificial intelligence :: Intelligence artificielle
# 19. Computational thinking and problem-solving :: 19. Pensée informatique et résolution de problèmes
Algorithms :: Algorithmes; Recursion :: Récursivité
# 20. Further programming :: 20. Programmation avancée
Programming paradigms :: Paradigmes de programmation; File processing and exception handling :: Traitement des fichiers et gestion des exceptions` },
},
edexcel: {
as: { en: "Pearson Edexcel International AS Level Computer Science", fr: "Informatique – AS-Level international Pearson Edexcel", code: "XCP01", text: `
# Topic 1: Computer systems :: Thème 1 : systèmes informatiques
Computer architecture :: Architecture de l'ordinateur; The operating system (OS) :: Le système d'exploitation
# Topic 2: Data representation :: Thème 2 : représentation des données
Numbers :: Nombres; Binary arithmetic :: Arithmétique binaire; Text :: Texte
# Topic 3: Networks and encryption :: Thème 3 : réseaux et chiffrement
Network fundamentals :: Bases des réseaux; Encryption :: Chiffrement
# Topic 4: Structuring data :: Thème 4 : structurer les données
Relational databases :: Bases de données relationnelles; Data structures :: Structures de données; Abstract data types (ADTs) :: Types abstraits de données
# Topic 5: Problem solving :: Thème 5 : résolution de problèmes
Tools and techniques :: Outils et techniques; Searching and sorting algorithms :: Algorithmes de recherche et de tri; Boolean logic :: Logique booléenne; Programming paradigms :: Paradigmes de programmation
# Topic 6: Enabling technologies :: Thème 6 : technologies habilitantes
Data science :: Science des données; Artificial intelligence (AI) :: Intelligence artificielle (IA); Tools :: Outils
# Topic 7: Programming :: Thème 7 : programmation
Constructs :: Structures de contrôle
# Topic 8: Organising and handling data :: Thème 8 : organiser et traiter les données
Data types and structures :: Types et structures de données; Data handling methods :: Méthodes de traitement des données; Relational databases in programs :: Bases de données relationnelles dans les programmes
# Topic 9: Best practice :: Thème 9 : bonnes pratiques
Program design :: Conception de programmes; Clean code :: Code propre; Functionality :: Fonctionnalité
# Topic 10: Computational thinking and algorithms :: Thème 10 : pensée informatique et algorithmes
Computational thinking :: Pensée informatique; Implementing algorithms :: Mettre en œuvre des algorithmes; Search and sort algorithms :: Algorithmes de recherche et de tri; Recursion :: Récursivité` },
a: { en: "Pearson Edexcel International A Level Computer Science", fr: "Informatique – A-Level international Pearson Edexcel", code: "YCP01", text: `
# Topic 11: Computer systems and data representation :: Thème 11 : systèmes informatiques et représentation des données
Computer architecture :: Architecture de l'ordinateur; The operating system :: Le système d'exploitation; Data representation :: Représentation des données
# Topic 12: Networks and cybersecurity :: Thème 12 : réseaux et cybersécurité
Networking :: Mise en réseau; The Internet of Things (IoT) :: L'Internet des objets; Cybersecurity :: Cybersécurité; Computing paradigms :: Paradigmes informatiques
# Topic 13: Programming languages :: Thème 13 : langages de programmation
Types of programming languages :: Types de langages de programmation
# Topic 14: Structuring data :: Thème 14 : structurer les données
Abstract data types (ADTs) :: Types abstraits de données
# Topic 15: Problem solving :: Thème 15 : résolution de problèmes
Algorithm design :: Conception d'algorithmes; Algorithms :: Algorithmes; Algorithmic efficiency :: Efficacité algorithmique; Boolean logic :: Logique booléenne
# Topic 16: Emerging technologies and professional practice :: Thème 16 : technologies émergentes et pratique professionnelle
Emerging technologies :: Technologies émergentes; Professionalism :: Professionnalisme
# Topic 17: Programming :: Thème 17 : programmation
Fundamental concepts :: Notions fondamentales; Creating solutions :: Créer des solutions
# Topic 18: Representing and handling data :: Thème 18 : représenter et traiter les données
Data handling methods :: Méthodes de traitement des données; Methods to represent and handle ADTs :: Méthodes pour représenter et traiter les types abstraits
# Topic 19: Best practice :: Thème 19 : bonnes pratiques
Program design :: Conception de programmes; Clean code :: Code propre; Functionality :: Fonctionnalité
# Topic 20: Additional programming paradigms :: Thème 20 : autres paradigmes de programmation
Additional programming paradigms :: Autres paradigmes de programmation
# Topic 21: Algorithms :: Thème 21 : algorithmes
Advanced algorithms :: Algorithmes avancés` },
},
aqa: {
as: { en: "OxfordAQA International AS Level Computer Science", fr: "Informatique – AS-Level international OxfordAQA", code: "9645", text: `
# Procedural programming :: Programmation procédurale
Data types :: Types de données; Programming concepts :: Notions de programmation; Arithmetic operations :: Opérations arithmétiques; Relational operations :: Opérations relationnelles; Boolean operations :: Opérations booléennes; String-handling operations :: Opérations sur les chaînes; Random number generation :: Génération de nombres aléatoires; Exception handling :: Gestion des exceptions; Subroutines :: Sous-programmes
# Fundamental data structures :: Structures de données fondamentales
Arrays and lists :: Tableaux et listes; Records :: Enregistrements; Queues :: Files; Stacks :: Piles
# Program design :: Conception de programmes
Structured approach to programming :: Approche structurée de la programmation; Abstraction and decomposition :: Abstraction et décomposition; Following and writing algorithms :: Suivre et écrire des algorithmes; Aspects of software development :: Aspects du développement logiciel
# Searching and sorting algorithms :: Algorithmes de recherche et de tri
Searching algorithms :: Algorithmes de recherche; Sorting algorithms :: Algorithmes de tri
# Representing data :: Représenter les données
Number bases :: Bases de numération; Units of information :: Unités d'information; Unsigned binary :: Binaire non signé; Unsigned binary arithmetic :: Arithmétique binaire non signée; Signed binary using two's complement :: Binaire signé en complément à deux; Numbers with a fractional part :: Nombres à partie fractionnaire; Rounding errors :: Erreurs d'arrondi; Absolute and relative errors :: Erreurs absolues et relatives; Underflow and overflow :: Dépassement inférieur et supérieur; Character coding, images and sound :: Codage des caractères, images et son; Compression and encryption :: Compression et chiffrement; Error detection and correction :: Détection et correction d'erreurs
# Computer systems :: Systèmes informatiques
Hardware and software :: Matériel et logiciels; Software :: Logiciels; Programming languages and translation software :: Langages de programmation et logiciels de traduction
# Computer organisation and architecture :: Organisation et architecture de l'ordinateur
Internal hardware components of a computer :: Composants matériels internes d'un ordinateur; The processor and its components :: Le processeur et ses composants; The Fetch-Execute cycle and interrupts :: Le cycle recherche-exécution et les interruptions; Factors affecting processor performance :: Facteurs influençant les performances du processeur
# Machine code and assembly language :: Code machine et langage d'assemblage
Instruction format :: Format des instructions; Assembly language programming :: Programmation en langage d'assemblage
# Object-oriented and additional programming :: Programmation orientée objet et compléments
Classes, objects and instantiation :: Classes, objets et instanciation; Encapsulation :: Encapsulation; Relationships between classes :: Relations entre classes; Additional programming :: Compléments de programmation` },
a: { en: "OxfordAQA International A Level Computer Science", fr: "Informatique – A-Level international OxfordAQA", code: "9645", text: `
# Advanced data structures :: Structures de données avancées
Graphs :: Graphes; Trees :: Arbres; Hash tables :: Tables de hachage; Priority queues :: Files de priorité; Dictionaries :: Dictionnaires
# Advanced algorithms :: Algorithmes avancés
Graph algorithms :: Algorithmes sur les graphes; Tree algorithms :: Algorithmes sur les arbres
# Functional programming :: Programmation fonctionnelle
The functional programming paradigm :: Le paradigme de la programmation fonctionnelle; Writing functional programs :: Écrire des programmes fonctionnels; Lists in functional programming :: Les listes en programmation fonctionnelle
# Theory of computation :: Théorie du calcul
Finite state machines :: Machines à états finis; Regular expressions and regular languages :: Expressions et langages réguliers; Turing machines :: Machines de Turing; Backus-Naur Form and syntax diagrams :: Forme de Backus-Naur et diagrammes syntaxiques; Classification of algorithms :: Classification des algorithmes
# Networking and cyber security :: Réseaux et cybersécurité
Communications :: Communications; Networking :: Mise en réseau; The Internet :: Internet; The Transmission Control Protocol/Internet Protocol :: Le protocole TCP/IP; Cyber security :: Cybersécurité
# Databases :: Bases de données
Relational databases :: Bases de données relationnelles; Big data :: Mégadonnées` },
},
},
};
