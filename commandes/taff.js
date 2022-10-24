const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const config = require('../config.json')
const color = config.color

module.exports = {

    name: "taff",
    description: "donne le taff d'une personne",
    permission: "Aucune",
    category: "fun",
    dm: false,

    async run(bot, interaction) {

        try {
            const taff = [
                "Acheteur",

                "Administrateur de base de données",
                
                "Agent de sûreté aéroportuaire",
                
                "Agent de transit",
                
                "Agent d'entretien",
                
                "Agent funéraire",
                
                "Agent immobilier",
                
                "Agent de police",
                
                "Agent de presse",
                
                "Agent de sécurité",
                
                "Agent de surveillance de la voie publique",
                
                "Agronome",
                
                "Ambulancier",
                
                "Analyste financier",
                
                "Analyste programmeur",
                
                "Analyste Web",
                
                "Architecte",
                
                "Architecte paysagiste",
                
                "Architecte en système d'information",
                
                "Archiviste",
                
                "Assistant administratif et financier",
                
                "Assistant bibliothécaire",
                
                "Assistant d'éducation",
                
                "Assistant dentaire",
                
                "Assistant marketing",
                
                "Assistant paie et administration",
                
                "Assistant RH",
                
                "Assureur",
                
                "Audioprothésiste",
                
                "Auditeur financier",
                
                "Auxiliaire de puériculture",
                
                "Auxiliaire de vie sociale",
                
                "Avocat",
                
                "Bibliothécaire",
                
                "Biologiste",
                
                "Chargé de communication",
                
                "Chargé de recrutement",
                
                "Charpentier",
                
                "Chauffeur de taxi",
                
                "Chefs de chantier",
                
                "Chef de projet",
                
                "Chef de projet marketing",
                
                "Chef d'établissement",
                
                "Chiropracteur",
                
                "Chirurgien orthopédiste",
                
                "Coiffeur",
                
                "Commis de cuisine",
                
                "Comptable",
                
                "Concepteur de jeux vidéos",
                
                "Concepteur-rédacteur",
                
                "Conducteur de grue",
                
                "Conducteur de train",
                
                "Conseiller",
                
                "Conseiller d'orientation",
                
                "Conseiller en insertion professionnelle",
                
                "Consultant bien-être",
                
                "Consultant en informatique",
                
                "Contrôleur (trains)",
                
                "Contrôleur aérien",
                
                "Contrôleur de gestion",
                
                "Contrôleur financier",
                
                "Courtier en assurance",
                
                "Cuisinier",

                "Décorateur d'intérieur",

                "Dentiste",

                "Designer industriel",

                "Développeur informatique",

                "Diacre",

                "Diététicien",

                "Directeur artistique",

                "Directeur des ventes",

                "Directeur financier",

                "Directeur RH",

                "Économiste",

                "Éducateur de jeunes",

                "Éleveur",

                "Employé de banque",

                "Enseignant",

                "Ergothérapeute",

                "Esthéticienne",

                "Fleuriste",

                "Gardien",

                "Géomètre",

                "Gestionnaire immobilier",

                "Hôtesse de l'air",
                
                "Huissier",

                "Illustrateur",

                "Infirmière",

                "Ingénieur civil",

                "Ingénieur électronicien",

                "Ingénieur du BTP",

                "Inspecteur de l'action sanitaire et sociale",

                "Jardinier",

                "Jardinier paysagiste",

                "Journaliste",

                "Juge",

                "Kinésithérapeute",

                "Linguiste",

                "Machiniste",

                "Magasinier",

                "Maître d'hôtel",

                "Manipulateur radio",
                
                "Masseur",

                "Mécanicien aéronautique",

                "Médecin",

                "Moniteur d'auto-école",

                "Monteur électricien",

                "Nutritionniste",

                "Officier",

                "Opérateur de production",

                "Opérateur d'usinage sur commande numérique (UCN)",

                "Opticien",

                "Orthophoniste",

                "Personal Trainer",

                "Pharmacien",

                "Photographe",

                "Physicien",

                "Physicien médical",

                "Pilote",

                "Politicien",

                "Pompier",

                "Poseur de sol (solier)",

                "Prêtre",

                "Procureur",

                "Professeur des écoles",

                "Professeur d'éducation physique (EPS)",

                "Professeur de français langue étrangère",

                "Professeur des universités",

                "Psychologue",

                "Réceptionniste",

                "Réceptionniste d'hôtel",

                "Responsable communication",

                "Responsable grands comptes",

                "Responsable service clientèle",

                "Sages-femmes",

                "Secrétaire médicale",

                "Serveur",

                "Skipper",

                "Soldat",

                "Soudeur",

                "Statisticien",

                "Surveillant pénitentiaire",

                "Technicien alarme intrusion",

                "Technicien d'analyses biomédicales",

                "Technicien de maintenance informatique",

                "Technicien d'exploitation",

                "Téléconseiller",

                "Test manager",

                "Travailleur social",

                "Urbaniste",

                "Vendeur",

                "Vétérinaire",

                "Webmaster",
            ]
            const random = taff[Math.floor(Math.random() * taff.length)]
            const embed = new EmbedBuilder()
                .setColor(color)
                .setDescription(`${interaction.user.tag} tu feras le metier : ${random}`)
            interaction.reply({ embeds: [embed]})

        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande taff`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        }
    }
}