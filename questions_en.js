// questions_en.js

const englishQuestions = [
    { q: "The Indus Valley Civilization flourished around which period?", o: ["1000-500 BC", "2500-1750 BC", "500 BC - 200 AD", "3000-2500 BC"], a: "2500-1750 BC" },
{ q: "Who was the founder of the Mauryan Empire?", o: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Ajatashatru"], a: "Chandragupta Maurya" },
{ q: "In which year did India win its first Cricket World Cup?", o: ["1979", "1983", "2007", "2011"], a: "1983" },
{ q: "What is the capital of Japan?", o: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"], a: "Tokyo" },
{ q: "Which is the largest planet in our solar system?", o: ["Earth", "Mars", "Jupiter", "Saturn"], a: "Jupiter" },
{ q: "Who wrote the play 'Romeo and Juliet'?", o: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "George Orwell"], a: "William Shakespeare" },
    { q: "Which part of the Indian Constitution contains the Fundamental Rights?", o: ["Part I", "Part II", "Part III", "Part IV"], a: "Part III" },
    { q: "Who is considered the architect of the Indian Constitution?", o: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Vallabhbhai Patel", "Dr. B.R. Ambedkar"], a: "Dr. B.R. Ambedkar" },
    { q: "Under which article can the President of India declare a state of emergency (President's Rule)?", o: ["Article 352", "Article 356", "Article 360", "Article 370"], a: "Article 356" },
    { q: "The 73rd Constitutional Amendment Act is related to which of the following?", o: ["Municipalities", "Panchayati Raj", "Official Languages", "Fundamental Duties"], a: "Panchayati Raj" },
    { q: "The concept of 'Directive Principles of State Policy' was borrowed from which country?", o: ["USA", "United Kingdom", "Ireland", "Australia"], a: "Ireland" },
    { q: "Who administers the oath of office to the President of India?", o: ["The Prime Minister", "The Vice President", "The Chief Justice of India", "The Speaker of Lok Sabha"], a: "The Chief Justice of India" },
    { q: "What is the minimum age to be appointed as the Governor of a state in India?", o: ["25 years", "30 years", "35 years", "No age limit"], a: "35 years" },
    { q: "Which constitutional article deals with the 'Right to Equality'?", o: ["Article 14", "Article 19", "Article 21", "Article 32"], a: "Article 14" },
    { q: "The power to create a new state in India rests with the...", o: ["President", "Prime Minister", "State Legislature", "Parliament"], a: "Parliament" },
    { q: "How many schedules were there in the original Indian Constitution?", o: ["8", "10", "12", "14"], a: "8" },
    { q: "A Money Bill can only be introduced in which house of the Parliament?", o: ["Lok Sabha", "Rajya Sabha", "Both houses simultaneously", "Joint session"], a: "Lok Sabha" },
    { q: "The idea of a 'Concurrent List' in the Indian Constitution is borrowed from...", o: ["Canada", "Germany", "Australia", "Japan"], a: "Australia" },
    { q: "What does the 'writ of Habeas Corpus' mean?", o: ["To command", "To forbid", "You may have the body", "By what authority"], a: "You may have the body" },
    { q: "Who is the ex-officio Chairman of the Rajya Sabha?", o: ["The President", "The Vice President", "The Prime Minister", "The Leader of the Opposition"], a: "The Vice President" },
    { q: "Which amendment is known as the 'Mini-Constitution' of India?", o: ["7th Amendment", "24th Amendment", "42nd Amendment", "44th Amendment"], a: "42nd Amendment" },

    // --- Category: Indian History (15) ---
    { q: "Which was the only Indus Valley city with an artificial brick dockyard?", o: ["Harappa", "Mohenjo-Daro", "Lothal", "Kalibangan"], a: "Lothal" },
    { q: "The famous Kalinga War was fought by Emperor Ashoka in which year?", o: ["261 BC", "298 BC", "321 BC", "232 BC"], a: "261 BC" },
    { q: "Who was the founder of the Mughal Empire in India?", o: ["Humayun", "Akbar", "Babur", "Shah Jahan"], a: "Babur" },
    { q: "The first session of the Indian National Congress was held in which city?", o: ["Calcutta", "Madras", "Delhi", "Bombay (Mumbai)"], a: "Bombay (Mumbai)" },
    { q: "Who gave the slogan 'Do or Die' during the Quit India Movement?", o: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi"], a: "Mahatma Gandhi" },
    { q: "Who was the Viceroy of India when the Jallianwala Bagh massacre took place?", o: ["Lord Curzon", "Lord Irwin", "Lord Chelmsford", "Lord Mountbatten"], a: "Lord Chelmsford" },
    { q: "The 'Tripitakas' are sacred texts of which religion?", o: ["Jainism", "Buddhism", "Sikhism", "Hinduism"], a: "Buddhism" },
    { q: "Who founded the 'Ghadar Party' in San Francisco, USA?", o: ["Madam Bhikaji Cama", "Lala Har Dayal", "Shyamji Krishna Varma", "V.D. Savarkar"], a: "Lala Har Dayal" },
    { q: "The Battle of Buxar was fought in which year?", o: ["1757", "1764", "1772", "1781"], a: "1764" },
    { q: "Who introduced the 'Doctrine of Lapse' policy in India?", o: ["Lord Wellesley", "Lord Dalhousie", "Lord Canning", "Lord Curzon"], a: "Lord Dalhousie" },
    { q: "Who was the court poet of Emperor Samudragupta?", o: ["Banabhatta", "Harisena", "Chand Bardai", "Kalidasa"], a: "Harisena" },
    { q: "The Third Buddhist Council was held at which place?", o: ["Rajagriha", "Vaishali", "Pataliputra", "Kashmir"], a: "Pataliputra" },
    { q: "Who started the English newspaper 'The Bengal Gazette'?", o: ["James Augustus Hicky", "Raja Ram Mohan Roy", "Lord William Bentinck", "Annie Besant"], a: "James Augustus Hicky" },
    { q: "The ruins of Hampi, a UNESCO World Heritage site, represent which ancient empire?", o: ["Chola Empire", "Pandyan Empire", "Vijayanagara Empire", "Rashtrakuta Empire"], a: "Vijayanagara Empire" },
    { q: "The Poona Pact was an agreement between Mahatma Gandhi and...", o: ["Lord Irwin", "Muhammad Ali Jinnah", "B.R. Ambedkar", "Jawaharlal Nehru"], a: "B.R. Ambedkar" },

    // --- Category: Geography (15) ---
    { q: "Which is the longest river that flows entirely within India?", o: ["Brahmaputra", "Narmada", "Godavari", "Ganga"], a: "Godavari" },
    { q: "The 'Monsoon' season in India typically arrives first in which state?", o: ["Tamil Nadu", "Maharashtra", "Kerala", "West Bengal"], a: "Kerala" },
    { q: "Which is the highest mountain peak located entirely within India?", o: ["K2 (Godwin-Austen)", "Nanda Devi", "Kanchenjunga", "Mount Everest"], a: "Kanchenjunga" },
    { q: "The Tehri Dam, the highest dam in India, is built on which river?", o: ["Bhagirathi", "Alaknanda", "Ganga", "Yamuna"], a: "Bhagirathi" },
    { q: "The Strait of Gibraltar connects the Atlantic Ocean with which sea?", o: ["Black Sea", "Red Sea", "Mediterranean Sea", "North Sea"], a: "Mediterranean Sea" },
    { q: "Which Indian state has the longest coastline?", o: ["Andhra Pradesh", "Maharashtra", "Gujarat", "Tamil Nadu"], a: "Gujarat" },
    { q: "The 'Saddle Peak' is the highest peak of which Union Territory?", o: ["Lakshadweep", "Puducherry", "Andaman & Nicobar Islands", "Daman & Diu"], a: "Andaman & Nicobar Islands" },
    { q: "Which country shares the longest international boundary with India?", o: ["China", "Pakistan", "Bangladesh", "Nepal"], a: "Bangladesh" },
    { q: "The 'Equator' does not pass through which of these continents?", o: ["Asia", "Africa", "South America", "Europe"], a: "Europe" },
    { q: "Which type of soil is most suitable for cotton cultivation?", o: ["Red Soil", "Alluvial Soil", "Laterite Soil", "Black Soil (Regur)"], a: "Black Soil (Regur)" },
    { q: "What is the capital of Finland?", o: ["Oslo", "Stockholm", "Copenhagen", "Helsinki"], a: "Helsinki" },
    { q: "The 'Suez Canal' connects the Mediterranean Sea to the...", o: ["Red Sea", "Black Sea", "Arabian Sea", "Persian Gulf"], a: "Red Sea" },
    { q: "Which imaginary line passes through the middle of India?", o: ["Equator", "Tropic of Capricorn", "Tropic of Cancer", "Prime Meridian"], a: "Tropic of Cancer" },
    { q: "The 'Jog Falls' in Karnataka is created by which river?", o: ["Kaveri", "Tungabhadra", "Sharavathi", "Krishna"], a: "Sharavathi" },
    { q: "Which of the following is a landlocked country?", o: ["Thailand", "Cambodia", "Laos", "Vietnam"], a: "Laos" },

    // --- Category: General Science (15) ---
    { q: "Scurvy is a disease caused by the deficiency of which vitamin?", o: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], a: "Vitamin C" },
    { q: "What is the chemical name for Baking Soda?", o: ["Sodium Carbonate", "Sodium Bicarbonate", "Calcium Carbonate", "Sodium Chloride"], a: "Sodium Bicarbonate" },
    { q: "What is the SI unit of electric current?", o: ["Volt", "Watt", "Ohm", "Ampere"], a: "Ampere" },
    { q: "Which is the largest gland in the human body?", o: ["Pancreas", "Thyroid", "Liver", "Salivary Gland"], a: "Liver" },
    { q: "Sound waves cannot travel through which of the following?", o: ["Water", "Steel", "Air", "Vacuum"], a: "Vacuum" },
    { q: "Which gas is commonly known as 'Laughing Gas'?", o: ["Methane", "Nitrous Oxide", "Carbon Monoxide", "Sulphur Dioxide"], a: "Nitrous Oxide" },
    { q: "Which instrument is used to measure atmospheric pressure?", o: ["Hygrometer", "Thermometer", "Barometer", "Anemometer"], a: "Barometer" },
    { q: "What is the process by which plants prepare their food called?", o: ["Respiration", "Transpiration", "Photosynthesis", "Germination"], a: "Photosynthesis" },
    { q: "Which metal is liquid at room temperature?", o: ["Sodium", "Gallium", "Mercury", "Bromine"], a: "Mercury" },
    { q: "The red color of human blood is due to which pigment?", o: ["Myoglobin", "Hemocyanin", "Chlorophyll", "Hemoglobin"], a: "Hemoglobin" },
    { q: "An 'alloy' is a...", o: ["Pure metal", "Non-metal", "Mixture of metals", "Mixture of gas and liquid"], a: "Mixture of metals" },
    { q: "What is the study of insects called?", o: ["Ornithology", "Entomology", "Geology", "Botany"], a: "Entomology" },
    { q: "Which law of motion gives the measure of force? (F=ma)", o: ["First Law", "Second Law", "Third Law", "Law of Gravitation"], a: "Second Law" },
    { q: "Bronze is an alloy of copper and...", o: ["Zinc", "Tin", "Lead", "Aluminum"], a: "Tin" },
    { q: "Which part of the brain is responsible for maintaining balance and posture?", o: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Thalamus"], a: "Cerebellum" },

    // --- Category: Economy (15) ---
    { q: "Who is responsible for the monetary policy in India?", o: ["Ministry of Finance", "NITI Aayog", "Reserve Bank of India (RBI)", "State Bank of India"], a: "Reserve Bank of India (RBI)" },
    { q: "Who was the first chairman of the Planning Commission of India?", o: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Gulzarilal Nanda"], a: "Jawaharlal Nehru" },
    { q: "Who is known as the 'Father of the Green Revolution' in India?", o: ["Verghese Kurien", "Homi Bhabha", "C.V. Raman", "M.S. Swaminathan"], a: "M.S. Swaminathan" },
    { q: "Goods and Services Tax (GST) in India is what type of tax?", o: ["Direct Tax", "Indirect Tax", "Cess", "Property Tax"], a: "Indirect Tax" },
    { q: "Which sector contributes the most to India's GDP?", o: ["Agriculture Sector", "Industrial Sector", "Services Sector", "Public Sector"], a: "Services Sector" },
    { q: "NITI Aayog, the policy think tank of India, was formed to replace which body?", o: ["Finance Commission", "Planning Commission", "Law Commission", "Election Commission"], a: "Planning Commission" },
    { q: "What does 'FDI' stand for in economics?", o: ["Fiscal Deposit Insurance", "Foreign Direct Investment", "Federal Deposit Insurance", "Foreign Debt Initiative"], a: "Foreign Direct Investment" },
    { q: "The headquarters of the World Bank is located in...", o: ["New York, USA", "Geneva, Switzerland", "Paris, France", "Washington D.C., USA"], a: "Washington D.C., USA" },
    { q: "Devaluation of a currency means...", o: ["Increase in its value", "Reduction in its value", "Keeping its value constant", "Floating its value"], a: "Reduction in its value" },
    { q: "Which of the following is an example of a direct tax?", o: ["GST", "Customs Duty", "Excise Duty", "Income Tax"], a: "Income Tax" },
    { q: "In which year were the major commercial banks in India nationalized for the first time?", o: ["1947", "1955", "1969", "1980"], a: "1969" },
    { q: "Who is known as the 'Father of Economics'?", o: ["John Maynard Keynes", "Karl Marx", "Adam Smith", "Milton Friedman"], a: "Adam Smith" },
    { q: "What is the base year for calculating the Consumer Price Index (CPI) in India currently?", o: ["2004-05", "2010", "2012", "2014-15"], a: "2012" },
    { q: "A situation of rising prices and falling output/employment is known as...", o: ["Inflation", "Deflation", "Stagflation", "Recession"], a: "Stagflation" },
    { q: "SEBI (Securities and Exchange Board of India) is a...", o: ["Commercial Bank", "Regulatory Body", "Stock Exchange", "Government Ministry"], a: "Regulatory Body" },

    { q: "From where does the Preamble of the Indian Constitution derive its authority?", o: ["The Parliament", "The President", "The Supreme Court", "We, the people of India"], a: "We, the people of India" },
{ q: "Who appoints the Chief Election Commissioner of India?", o: ["The Prime Minister", "The Chief Justice of India", "The President", "The Parliament"], a: "The President" },
{ q: "A joint sitting of the two Houses of Parliament is presided over by whom?", o: ["The President of India", "The Vice President", "The Prime Minister", "The Speaker of the Lok Sabha"], a: "The Speaker of the Lok Sabha" },
{ q: "Which article of the Constitution provides for the establishment of a Finance Commission?", o: ["Article 280", "Article 324", "Article 243", "Article 315"], a: "Article 280" },
{ q: "How many languages are officially recognized in the 8th Schedule of the Indian Constitution?", o: ["18", "20", "22", "24"], a: "22" },

// --- Category: Indian History (More) ---
{ q: "Who wrote 'Ain-i-Akbari', a detailed document of Akbar's administration?", o: ["Tansen", "Birbal", "Abul Fazl", "Todar Mal"], a: "Abul Fazl" },
{ q: "The First Round Table Conference was held in London in which year?", o: ["1928", "1930", "1931", "1932"], a: "1930" },
{ q: "What was the original name of Mahavira, the 24th Tirthankara of Jainism?", o: ["Siddhartha", "Gautama", "Vardhamana", "Mahipala"], a: "Vardhamana" },
{ q: "The historic Grand Trunk Road was built by which ruler?", o: ["Akbar", "Humayun", "Sher Shah Suri", "Alauddin Khilji"], a: "Sher Shah Suri" },
{ q: "The Chauri Chaura incident led to the suspension of which movement?", o: ["Civil Disobedience Movement", "Quit India Movement", "Khilafat Movement", "Non-Cooperation Movement"], a: "Non-Cooperation Movement" },

// --- Category: Geography (More) ---
{ q: "The Duncan Passage separates which two landmasses?", o: ["North and Middle Andaman", "South and Little Andaman", "Andaman and Nicobar", "India and Sri Lanka"], a: "South and Little Andaman" },
{ q: "Which river is often called the 'Sorrow of Bengal' due to its devastating floods?", o: ["Ganga", "Hooghly", "Damodar", "Brahmaputra"], a: "Damodar" },
{ q: "Majuli, the largest river island in the world, is located in which state?", o: ["West Bengal", "Arunachal Pradesh", "Assam", "Manipur"], a: "Assam" },
{ q: "The famous 'Valley of Flowers' National Park is located in which state?", o: ["Jammu & Kashmir", "Himachal Pradesh", "Sikkim", "Uttarakhand"], a: "Uttarakhand" },
{ q: "Which is the southernmost point of the Indian mainland?", o: ["Indira Point", "Kanyakumari", "Rameswaram", "Point Calimere"], a: "Kanyakumari" },

// --- Category: General Science (More) ---
{ q: "The filament of an electric bulb is made of which metal?", o: ["Copper", "Aluminum", "Tungsten", "Lead"], a: "Tungsten" },
{ q: "The study of the Universe is known as?", o: ["Astrology", "Seismology", "Cosmology", "Geology"], a: "Cosmology" },
{ q: "Which acid is present in lemon?", o: ["Lactic Acid", "Acetic Acid", "Formic Acid", "Citric Acid"], a: "Citric Acid" },
{ q: "What is the main component of Natural Gas?", o: ["Butane", "Propane", "Methane", "Ethane"], a: "Methane" },
{ q: "Myopia is a defect of the eyes that is also known as...", o: ["Far-sightedness", "Near-sightedness", "Astigmatism", "Cataract"], a: "Near-sightedness" },

// --- Category: Economy (More) ---
{ q: "Who signs the one rupee note in India?", o: ["The Governor of RBI", "The President of India", "The Prime Minister", "The Finance Secretary"], a: "The Finance Secretary" },
{ q: "The terms 'Bull' and 'Bear' are associated with which commercial activity?", o: ["Banking", "Foreign Trade", "Stock Market", "Manufacturing"], a: "Stock Market" },
{ q: "What is the full form of NPA in the banking sector?", o: ["New Profit Account", "Net Performing Asset", "Non-Performing Asset", "New Policy Act"], a: "Non-Performing Asset" },
{ q: "In which Five-Year Plan was the slogan 'Garibi Hatao' (Remove Poverty) introduced?", o: ["Third Plan", "Fourth Plan", "Fifth Plan", "Sixth Plan"], a: "Fifth Plan" },
{ q: "The financial year in India is from...", o: ["January 1 to December 31", "April 1 to March 31", "July 1 to June 30", "June 1 to May 31"], a: "April 1 to March 31" },

// --- Category: Art, Culture & Awards (New - 10) ---
{ q: "The Dadasaheb Phalke Award is India's highest honor in which field?", o: ["Literature", "Sports", "Cinema", "Science"], a: "Cinema" },
{ q: "Kathakali is a classical dance form that originated in which state?", o: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"], a: "Kerala" },
{ q: "Madhubani, a style of folk painting, is popular in which Indian state?", o: ["Rajasthan", "Bihar", "West Bengal", "Odisha"], a: "Bihar" },
{ q: "The Jnanpith Award is the highest literary honor in India, given for contribution to...", o: ["A single work", "Lifetime achievement in journalism", "Lifetime contribution to literature", "Poetry only"], a: "Lifetime contribution to literature" },
{ q: "The famous Hornbill Festival is celebrated in which state of Northeast India?", o: ["Manipur", "Mizoram", "Nagaland", "Meghalaya"], a: "Nagaland" },
{ q: "The Ajanta and Ellora caves, famous for their rock-cut architecture, are located in which state?", o: ["Madhya Pradesh", "Karnataka", "Maharashtra", "Gujarat"], a: "Maharashtra" },
{ q: "Ustad Bismillah Khan was a famous maestro of which musical instrument?", o: ["Sitar", "Sarod", "Tabla", "Shehnai"], a: "Shehnai" },
{ q: "Who was the first Indian to receive the Nobel Prize?", o: ["C.V. Raman", "Mother Teresa", "Rabindranath Tagore", "Amartya Sen"], a: "Rabindranath Tagore" },
{ q: "The design on the leaf of the Bharat Ratna award is that of a...", o: ["Lotus leaf", "Peepal leaf", "Banyan leaf", "Mango leaf"], a: "Peepal leaf" },
{ q: "The 'Garba' folk dance is a popular tradition in which state?", o: ["Punjab", "Rajasthan", "Gujarat", "Maharashtra"], a: "Gujarat" },

// --- Category: Computers & IT (New - 5) ---
{ q: "What does RAM stand for in a computer?", o: ["Read Access Memory", "Random Access Memory", "Real-time Access Memory", "Run-time Access Memory"], a: "Random Access Memory" },
{ q: "Which part of a computer is often called its 'brain'?", o: ["Monitor", "RAM", "Hard Drive", "CPU (Central Processing Unit)"], a: "CPU (Central Processing Unit)" },
{ q: "Who is known as the inventor of the World Wide Web (WWW)?", o: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Charles Babbage"], a: "Tim Berners-Lee" },
{ q: "The file extension '.xlsx' is associated with which application?", o: ["MS Word", "MS Excel", "MS PowerPoint", "Adobe Acrobat"], a: "MS Excel" },
{ q: "In computing, what is a 'bug'?", o: ["A virus", "A feature", "An error in a program", "A type of hardware"], a: "An error in a program" }
    // Add more English questions here
];
