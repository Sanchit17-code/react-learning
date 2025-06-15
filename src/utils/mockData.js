const resList = [
    {   id:1,
        resName: "Meghana Foods",
        cuisine: "Biryani, North Indian, Chinese",
        rating: "4.5",
        deliveryTime: "30 min",
        isPromoted: true,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        menu: [
            { id: 1, name: "Special Chicken Biryani", price: 299, description: "Signature Hyderabadi style biryani with tender chicken pieces" },
            { id: 2, name: "Paneer Butter Masala", price: 249, description: "Cottage cheese in rich tomato and butter gravy" },
            { id: 3, name: "Chicken Manchurian", price: 279, description: "Crispy chicken in spicy Chinese sauce" },
            { id: 4, name: "Veg Fried Rice", price: 199, description: "Stir-fried rice with fresh vegetables and soy sauce" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Special Chicken Biryani", price: 299, description: "Our signature Hyderabadi style biryani features perfectly aged basmati rice layered with tender, marinated chicken pieces that have been slow-cooked with aromatic spices including saffron, cardamom, and bay leaves. Each grain of rice is infused with rich flavors, and the dish is sealed and cooked using the traditional dum method to ensure every bite delivers an explosion of authentic taste that has made this our most beloved specialty.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 2, name: "Paneer Butter Masala", price: 249, description: "Fresh cottage cheese cubes are gently simmered in our velvety smooth tomato and butter gravy that's been enriched with cream, cashews, and a perfect blend of traditional Indian spices. The rich, creamy texture combined with the subtle sweetness of tomatoes and the aromatic essence of fresh herbs creates a luxurious vegetarian dish that pairs beautifully with naan or basmati rice, making it a favorite among both vegetarians and non-vegetarians alike.", imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop" },
                    { id: 3, name: "Mutton Biryani", price: 349, description: "This traditional mutton biryani showcases tender, succulent pieces of goat meat that have been marinated overnight in yogurt and spices, then slow-cooked with premium basmati rice. The mutton is fall-off-the-bone tender, and each grain of rice is perfectly seasoned with saffron, whole garam masala, and fresh mint leaves. This royal dish represents the pinnacle of Mughlai cuisine and is served with cooling raita, tangy pickle, and a boiled egg to complete the authentic biryani experience.", imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
                    { id: 4, name: "Chicken Tikka Masala", price: 289, description: "Succulent chunks of chicken are first marinated in yogurt and spices, then grilled to perfection in our tandoor oven before being simmered in a rich, creamy tomato-based gravy. The sauce is a harmonious blend of onions, garlic, ginger, and aromatic spices, finished with cream and fresh cilantro. This beloved Indo-British fusion dish offers the perfect balance of smoky tandoori flavors and creamy richness, making it an ideal choice for those who enjoy moderately spiced, flavorful curries.", imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Biryani Specials",
                dishes: [
                    { id: 5, name: "Special Chicken Biryani", price: 299, description: "Our signature Hyderabadi-style chicken biryani is a masterpiece of culinary artistry, featuring premium basmati rice that's been aged for optimal texture and flavor. The chicken is marinated in a special blend of yogurt, ginger-garlic paste, red chili powder, and garam masala for hours before being partially cooked and then layered with rice. The dish is then sealed and cooked on dum (slow steam) method, allowing all the flavors to meld together perfectly, creating an aromatic and flavorful experience that represents the true essence of authentic biryani preparation.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 6, name: "Mutton Biryani", price: 349, description: "This royal mutton biryani is prepared using traditional Awadhi techniques, where tender pieces of mutton are slow-cooked with aromatic whole spices until they become incredibly tender and flavorful. The meat is then layered with partially cooked, saffron-infused basmati rice and cooked using the dum method in a heavy-bottomed pot. Fresh mint leaves, fried onions, and a touch of rose water add layers of complexity to this dish. Served with cooling cucumber raita, spicy pickle, and a hard-boiled egg, this biryani is a complete meal that showcases the grandeur of Mughlai cuisine.", imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
                    { id: 7, name: "Veg Biryani", price: 229, description: "Our fragrant vegetarian biryani is a celebration of fresh, seasonal vegetables including cauliflower, carrots, green beans, potatoes, and green peas, all cooked with aromatic basmati rice. The vegetables are first sautéed with onions, garlic, and ginger, then layered with rice that's been infused with saffron, cardamom, cinnamon, and bay leaves. The dish is finished with fried onions, fresh mint, and cilantro before being cooked on dum. This wholesome, nutritious biryani proves that vegetarian dishes can be just as flavorful and satisfying as their meat counterparts, offering a perfect blend of textures and tastes.", imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" },
                    { id: 8, name: "Egg Biryani", price: 249, description: "This delicious egg biryani features perfectly hard-boiled eggs that are lightly fried to achieve a golden exterior, then layered with fragrant basmati rice that's been cooked with whole spices, saffron, and fried onions. The eggs absorb the aromatic flavors from the rice and spices during the dum cooking process, creating a harmonious blend of tastes and textures. This protein-rich biryani is garnished with fresh herbs, served with raita and pickle, and offers an economical yet satisfying alternative to meat biryanis while maintaining all the traditional flavors and cooking techniques that make biryani special.", imageUrl: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=300&h=200&fit=crop" },
                    { id: 9, name: "Fish Biryani", price: 319, description: "Our coastal-style fish biryani showcases fresh, firm fish fillets that are marinated in turmeric, red chili powder, and salt, then lightly fried before being layered with aromatic basmati rice. The rice is infused with coconut milk, curry leaves, and coastal spices that complement the delicate flavor of the fish. This unique biryani represents the coastal culinary traditions where seafood meets the royal biryani technique. The dish is garnished with fried onions, fresh cilantro, and curry leaves, creating a distinctive flavor profile that's both aromatic and satisfying, perfect for seafood lovers seeking a traditional yet regional twist on classic biryani.", imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "North Indian Curries",
                dishes: [
                    { id: 10, name: "Paneer Butter Masala", price: 249, description: "This rich and creamy vegetarian curry features fresh cottage cheese cubes that are gently cooked in a luxurious tomato-based gravy enriched with butter, cream, and cashews. The sauce is carefully balanced with aromatic spices including garam masala, fenugreek leaves, and a hint of sweetness that complements the tangy tomatoes. The dish is finished with fresh cream and cilantro, creating a velvety smooth texture that's both indulgent and comforting. This restaurant-style paneer butter masala pairs perfectly with butter naan, garlic naan, or steamed basmati rice, making it a beloved choice for vegetarians and a gateway dish for those new to Indian cuisine.", imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop" },
                    { id: 11, name: "Dal Makhani", price: 199, description: "This iconic Punjabi dal is made from whole black lentils and kidney beans that are slow-cooked overnight to achieve the perfect creamy consistency. The lentils are simmered with butter, cream, tomatoes, and a special blend of spices including cumin, coriander, and garam masala. The long, slow cooking process allows the lentils to break down naturally, creating a rich, velvety texture that's both hearty and satisfying. Finished with a dollop of fresh cream and butter, this dal represents the essence of North Indian comfort food and is traditionally served with rice or Indian breads, offering a protein-rich, vegetarian meal that's both nutritious and indulgent.", imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
                    { id: 12, name: "Chicken Tikka Masala", price: 289, description: "Tender chunks of chicken are first marinated in yogurt, lemon juice, and aromatic spices, then grilled in our tandoor to achieve a perfect smoky char before being simmered in a rich, creamy tomato-based sauce. The masala gravy is a complex blend of onions, garlic, ginger, tomatoes, and cream, seasoned with traditional spices and finished with fresh cilantro. This globally beloved dish offers the perfect balance of smoky tandoori flavors from the grilled chicken and the rich, creamy sauce that's mildly spiced and incredibly satisfying. Served with basmati rice or naan bread, this dish represents the perfect fusion of traditional Indian cooking techniques with a universally appealing flavor profile.", imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
                    { id: 13, name: "Palak Paneer", price: 229, description: "Fresh spinach leaves are blanched and pureed to create a vibrant green base for this nutritious North Indian curry, which features cubes of soft cottage cheese simmered in the spinach gravy. The dish is enhanced with onions, garlic, ginger, and traditional spices including cumin, coriander, and garam masala, creating a perfect balance of earthy spinach flavors and aromatic spices. The cottage cheese adds protein and a creamy texture that complements the slightly bitter yet flavorful spinach. This healthy, iron-rich curry is finished with a touch of cream and pairs beautifully with roti, naan, or rice, making it a favorite among health-conscious diners who don't want to compromise on taste.", imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Chinese Favorites",
                dishes: [
                    { id: 14, name: "Chicken Manchurian", price: 279, description: "Crispy, golden-brown chicken pieces are coated in a specially seasoned batter and deep-fried to perfection, then tossed in our signature spicy Manchurian sauce that combines the best of Indo-Chinese flavors. The sauce is a perfect blend of soy sauce, vinegar, chili sauce, and aromatic garlic and ginger, creating a sweet, sour, and spicy flavor profile that's both addictive and satisfying. The dish is garnished with fresh spring onions and chilies, adding color and freshness to every bite. This popular Indo-Chinese fusion dish represents the perfect marriage of Chinese cooking techniques with Indian spice preferences, making it a crowd-pleaser that works equally well as an appetizer or main course.", imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop" },
                    { id: 15, name: "Veg Fried Rice", price: 199, description: "This colorful and flavorful fried rice features perfectly cooked basmati rice stir-fried with a medley of fresh, crisp vegetables including carrots, bell peppers, cabbage, beans, and spring onions. The rice is seasoned with soy sauce, vinegar, and a touch of sesame oil, creating an authentic Chinese flavor profile with an Indian twist. Each grain of rice is separate and coated with the savory sauce, while the vegetables retain their crunch and vibrant colors. Garlic and ginger add aromatic depth to the dish, which is finished with fresh cilantro and served hot. This vegetarian-friendly dish is both nutritious and satisfying, offering a lighter alternative to heavier curries while still being packed with flavor and texture.", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop" },
                    { id: 16, name: "Chicken Noodles", price: 219, description: "Fresh hakka noodles are wok-tossed with tender strips of marinated chicken and a colorful array of vegetables including bell peppers, carrots, cabbage, and onions. The noodles are cooked to the perfect al dente texture and seasoned with dark soy sauce, light soy sauce, and aromatic spices that create a complex, savory flavor profile. The chicken is marinated in soy sauce, ginger-garlic paste, and spices before being stir-fried to perfection, ensuring each piece is juicy and flavorful. This popular Indo-Chinese dish is garnished with fresh spring onions and served hot, offering a satisfying combination of protein, carbohydrates, and vegetables in one delicious, comforting bowl that appeals to all age groups.", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" },
                    { id: 17, name: "Gobi Manchurian", price: 189, description: "Fresh cauliflower florets are coated in a light, crispy batter and deep-fried until golden brown, then tossed in our signature tangy Manchurian sauce that perfectly balances sweet, sour, and spicy flavors. The sauce is made with a blend of soy sauce, tomato ketchup, chili sauce, vinegar, and aromatic garlic and ginger, creating a glossy coating that clings to each cauliflower piece. This vegetarian Indo-Chinese favorite is garnished with fresh cilantro and spring onions, adding color and freshness to the dish. The contrast between the crispy exterior and tender interior of the cauliflower, combined with the bold, flavorful sauce, makes this dish an irresistible appetizer or side dish that even non-vegetarians love.", imageUrl: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Combo Meals",
                dishes: [
                    { id: 18, name: "Biryani + Curry Combo", price: 379, description: "This satisfying combination meal features our signature chicken biryani served alongside a rich, flavorful curry and cooling cucumber raita. The biryani showcases tender, marinated chicken pieces layered with aromatic basmati rice that's been infused with saffron, whole spices, and fried onions, cooked using the traditional dum method. The accompanying curry complements the biryani perfectly with its robust flavors and creamy texture, while the fresh raita provides a cooling contrast to the spiced dishes. This complete meal offers exceptional value and variety, allowing you to experience multiple flavors and textures in one comprehensive dining experience that represents the best of North Indian cuisine.", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop" },
                    { id: 19, name: "North Indian Thali", price: 299, description: "Experience the diversity of North Indian cuisine with our complete thali that includes freshly steamed basmati rice, soft rotis, creamy dal makhani, a seasonal vegetable curry, tangy pickle, and sweet dessert. Each component is carefully prepared using traditional recipes and authentic spices, offering a balanced meal that represents the variety and richness of Indian culinary traditions. The thali provides different tastes, textures, and nutritional elements in one comprehensive meal, from the protein-rich dal to the fiber-packed vegetables, the energy-providing grains, and the probiotic benefits of fermented pickles. This traditional way of dining ensures you experience a complete, satisfying meal that's both nutritious and delicious.", imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
                    { id: 20, name: "Chinese Combo", price: 329, description: "This popular Indo-Chinese combination brings together our flavorful vegetable fried rice, spicy Gobi Manchurian, and a warming soup to create a complete Chinese-style meal. The fried rice features perfectly separated grains tossed with fresh vegetables and aromatic seasonings, while the Manchurian offers crispy cauliflower in a tangy, spicy sauce that's both sweet and savory. The soup provides a comforting, warm start to the meal with its clear broth, fresh vegetables, and aromatic spices. This combination offers excellent value and variety, allowing you to enjoy different textures and flavors that complement each other perfectly, making it an ideal choice for those who want to experience the best of Indo-Chinese cuisine in one convenient meal.", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop" },
                    { id: 21, name: "Family Pack", price: 899, description: "Our generous family pack is designed to feed 4-6 people and includes two full portions of our signature biryanis (chicken and mutton), two rich North Indian curries (butter chicken and dal makhani), fresh naan bread, basmati rice, cooling raita, tangy pickles, and a traditional dessert. This comprehensive meal package offers exceptional value for families or groups, ensuring everyone can enjoy a variety of flavors and dishes without having to order multiple items separately. Each dish is prepared with the same care and attention to detail as our individual portions, maintaining our high standards of taste and quality. This feast represents the best of our menu and is perfect for celebrations, family dinners, or when you want to share the joy of authentic Indian cuisine with loved ones.", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:2,
        resName: "KFC",
        cuisine: "Fast Food",
        rating: "2",
        deliveryTime: "25 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
        menu: [
            { id: 1, name: "8 Pc Chicken Bucket", price: 799, description: "8 pieces of KFC's signature fried chicken" },
            { id: 2, name: "Zinger Burger", price: 199, description: "Crispy chicken fillet with fresh lettuce and mayo" },
            { id: 3, name: "Popcorn Chicken", price: 249, description: "Bite-sized pieces of crispy chicken" },
            { id: 4, name: "Chicken Wings", price: 299, description: "Spicy chicken wings with KFC's secret recipe" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "8 Pc Chicken Bucket", price: 799, description: "Our signature 8-piece chicken bucket features hand-breaded chicken pieces that are pressure-cooked to perfection using Colonel Sanders' Original Recipe of 11 herbs and spices. Each piece is crispy on the outside with juicy, tender meat inside, offering the perfect balance of flavor and texture. This bucket includes a mix of drumsticks, thighs, breasts, and wings, providing variety in every serving. The secret blend of spices creates that distinctive KFC taste that has made this bucket a global favorite for families and sharing occasions, delivering consistent quality and flavor that has been perfected over decades.", imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop" },
                    { id: 2, name: "Zinger Burger", price: 199, description: "Our famous Zinger Burger features a crispy, spicy chicken fillet that's marinated in our special hot and spicy seasoning, then breaded and fried to golden perfection. The chicken fillet is served in a soft sesame seed bun with fresh iceberg lettuce, creamy mayonnaise, and our signature spicy sauce that adds an extra kick. This burger delivers the perfect combination of heat and flavor, with the crispy coating providing a satisfying crunch while the tender chicken inside remains juicy and flavorful. It's ideal for those who love spicy food and want a burger that packs a punch without being overwhelmingly hot.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 3, name: "Hot Wings", price: 299, description: "These spicy chicken wings are marinated in our secret hot sauce blend and cooked to perfection, delivering a fiery kick that will satisfy any spice lover. Each wing is coated in our signature spicy seasoning that penetrates deep into the meat, ensuring every bite is packed with flavor and heat. The wings are crispy on the outside while remaining tender and juicy inside, offering the perfect texture contrast. Served with a side of cooling ranch or blue cheese dip, these wings are perfect for sharing or as a standalone meal for those who crave bold, spicy flavors that linger pleasantly on the palate.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" },
                    { id: 4, name: "Chicken Popcorn", price: 249, description: "Our beloved Chicken Popcorn consists of bite-sized pieces of tender chicken breast that are seasoned with our signature blend of herbs and spices, then coated in our special crispy breading and fried to golden perfection. Each piece is perfectly sized for snacking and offers the same delicious KFC flavor in a convenient, shareable format. The popcorn chicken is incredibly versatile - perfect as an appetizer, snack, or side dish that pairs well with our variety of dipping sauces. The crispy exterior gives way to juicy, flavorful chicken that's seasoned throughout, making each bite consistently delicious and satisfying for both kids and adults alike.", imageUrl: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Chicken Buckets",
                dishes: [
                    { id: 5, name: "8 Pc Chicken Bucket", price: 799, description: "This generous 8-piece bucket contains a perfect assortment of our Original Recipe chicken pieces, each hand-breaded and pressure-cooked using Colonel Sanders' secret blend of 11 herbs and spices. The bucket typically includes 2 drumsticks, 2 thighs, 2 wings, and 2 breast pieces, offering variety for everyone. Each piece boasts a golden, crispy exterior that seals in the natural juices, resulting in incredibly tender and flavorful meat. This bucket is ideal for sharing among family or friends, providing enough delicious chicken to satisfy multiple appetites while maintaining the consistent quality and taste that KFC is renowned for worldwide.", imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop" },
                    { id: 6, name: "12 Pc Chicken Bucket", price: 1199, description: "Our family-size 12-piece chicken bucket is perfect for larger gatherings, parties, or families who can't get enough of KFC's Original Recipe chicken. This substantial bucket contains a well-balanced mix of drumsticks, thighs, wings, and breast pieces, all prepared using our time-honored pressure-cooking method that ensures each piece is juicy inside and crispy outside. The generous portion size makes it an economical choice for feeding groups, while the variety of cuts ensures everyone gets their favorite piece. Each piece maintains the signature KFC flavor profile that has made our chicken a global sensation for generations.", imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop" },
                    { id: 7, name: "6 Pc Hot Wings", price: 399, description: "These six spectacular hot wings deliver an intense, spicy experience that will challenge and delight heat enthusiasts. Each wing is carefully marinated in our signature hot sauce blend before being cooked to perfection, ensuring the spicy flavors penetrate throughout the meat. The wings feature a beautifully crispy skin that gives way to tender, succulent meat that's been infused with layers of heat and flavor. Served with optional cooling dips, these wings are perfect for those who appreciate bold, fiery flavors and want a protein-packed snack or meal that delivers both satisfaction and excitement with every bite.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" },
                    { id: 8, name: "4 Pc Chicken Strips", price: 299, description: "Our premium chicken strips are made from tender breast meat that's been carefully cut into perfect strips, marinated in our signature seasonings, and coated with our special crispy breading before being cooked to golden perfection. Each strip offers the classic KFC flavor in an easy-to-eat format that's perfect for dipping in your favorite sauces. The strips maintain a perfect texture balance with their crunchy exterior and incredibly tender, juicy interior. Whether enjoyed as a main dish, shared appetizer, or quick snack, these chicken strips deliver the quality and taste that KFC customers expect in a convenient, mess-free format.", imageUrl: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=300&h=200&fit=crop" },
                    { id: 9, name: "Boneless Mini", price: 179, description: "These four bite-sized boneless chicken pieces are perfect for those who want to enjoy KFC's signature flavors without dealing with bones. Made from premium chicken breast meat, each piece is seasoned with our special blend of herbs and spices, coated in our traditional breading, and cooked until golden and crispy. The mini size makes them ideal for snacking, sharing, or as a lighter meal option. Despite their small size, each piece packs the full KFC flavor experience, with the same attention to quality and taste that goes into all our chicken products. Perfect for kids or adults who prefer convenience without compromising on flavor.", imageUrl: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Burgers & Wraps",
                dishes: [
                    { id: 10, name: "Zinger Burger", price: 199, description: "Our signature Zinger Burger showcases a perfectly spiced, crispy chicken fillet that's marinated in our special blend of hot spices and herbs, then breaded with our signature coating and fried until golden brown. The spicy chicken fillet is nestled in a soft, toasted sesame seed bun and topped with fresh, crisp iceberg lettuce and our creamy mayonnaise. The heat level is perfectly balanced to provide a satisfying kick without overwhelming the palate, making it accessible to most spice tolerance levels. This burger has become a global favorite for those who crave bold flavors and satisfying textures in their fast food experience.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 11, name: "Classic Chicken Burger", price: 179, description: "The Classic Chicken Burger features our Original Recipe chicken fillet, seasoned with the same secret blend of 11 herbs and spices that made KFC famous, then hand-breaded and cooked to achieve the perfect balance of crispy exterior and tender, juicy interior. This timeless burger is served in a soft bun with fresh lettuce and creamy mayonnaise, allowing the distinctive KFC flavor to shine through. It's the perfect choice for those who appreciate the classic taste that has remained unchanged for decades, offering comfort food satisfaction with every bite. This burger represents the essence of KFC's culinary heritage in a convenient, handheld format.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
                    { id: 12, name: "Zinger Wrap", price: 219, description: "Our Zinger Wrap combines the fiery flavor of our signature Zinger chicken with the convenience of a soft tortilla wrap. The spicy chicken fillet is wrapped alongside fresh lettuce, diced tomatoes, and our special sauce in a warm, soft tortilla that's easy to handle and perfect for on-the-go eating. The wrap format allows for a perfect balance of ingredients in every bite, with the cooling vegetables providing a nice contrast to the spicy chicken. This innovative take on our classic Zinger flavor offers a lighter alternative to traditional burgers while maintaining all the bold taste and satisfying protein that KFC customers love and expect.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 13, name: "Twister Wrap", price: 189, description: "The Twister Wrap features tender chicken strips that are seasoned and cooked to perfection, then wrapped in a soft flour tortilla along with fresh lettuce, diced tomatoes, and our signature sauce. This wrap offers a perfect combination of flavors and textures, with the crispy chicken strips providing protein and crunch, while the fresh vegetables add coolness and nutrition. The tortilla is warmed to enhance its flexibility and flavor, making it easy to eat without making a mess. This wrap is ideal for those seeking a lighter meal option that doesn't compromise on taste or satisfaction, offering the beloved KFC chicken experience in a healthy, convenient format.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Sides & Snacks",
                dishes: [
                    { id: 14, name: "Popcorn Chicken", price: 249, description: "Our irresistible Popcorn Chicken features bite-sized pieces of premium chicken breast that are carefully cut into uniform pieces, seasoned with our signature blend of herbs and spices, then coated in our special crispy breading and fried to golden perfection. Each piece delivers the authentic KFC flavor in a convenient, snackable format that's perfect for sharing or enjoying as a personal treat. The popcorn chicken maintains the same quality standards as our larger pieces, with a crispy exterior that gives way to tender, juicy meat inside. These versatile pieces are excellent for dipping in our variety of sauces and make an ideal appetizer, side dish, or light meal option.", imageUrl: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=300&h=200&fit=crop" },
                    { id: 15, name: "French Fries", price: 99, description: "Our perfectly seasoned French fries are made from premium potatoes that are cut into optimal strips and cooked to achieve the ideal balance of crispy exterior and fluffy interior. Each fry is seasoned with our special salt blend that enhances the natural potato flavor while adding a subtle savory note. The fries are cooked in small batches to ensure consistent quality and served hot for maximum enjoyment. These golden, crispy fries are the perfect complement to any KFC meal, offering a classic side dish that appeals to all ages. Whether enjoyed on their own or paired with our signature chicken, these fries deliver the comfort food satisfaction that makes every meal complete.", imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop" },
                    { id: 16, name: "Coleslaw", price: 79, description: "Our refreshing coleslaw provides a cool, crisp contrast to our warm, spiced chicken dishes. Made with fresh, finely shredded cabbage and carrots, this classic side dish is dressed with our signature creamy coleslaw dressing that perfectly balances sweet and tangy flavors. The vegetables retain their natural crunch, providing a satisfying texture that cleanses the palate between bites of our seasoned chicken. This traditional Southern-style coleslaw has been a KFC staple for decades, offering a lighter, healthier option that complements the richness of our fried foods. It's an essential part of the complete KFC experience and adds nutritional value to any meal.", imageUrl: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?w=300&h=200&fit=crop" },
                    { id: 17, name: "Chicken Wings", price: 299, description: "These premium chicken wings are prepared using our traditional cooking methods, ensuring each wing develops a perfectly crispy skin while maintaining incredibly tender, flavorful meat inside. The wings are seasoned with our special blend of spices that penetrates throughout the meat during cooking, creating layers of flavor in every bite. Whether you prefer them plain to taste the natural chicken flavor enhanced by our seasoning, or with one of our signature sauces for added heat and complexity, these wings deliver restaurant-quality taste and satisfaction. The wings are cooked to order and served hot, making them perfect for sharing or enjoying as a protein-packed snack or meal component.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Combo Meals",
                dishes: [
                    { id: 18, name: "Zinger Combo", price: 329, description: "This amazing combo meal includes our famous Zinger burger with crispy spicy chicken, golden french fries that are perfectly seasoned, and a refreshing cold drink to complete your meal. Great value for money and perfect for lunch or dinner when you want everything in one convenient package that satisfies your hunger completely.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 19, name: "Chicken Bucket Combo", price: 999, description: "This family combo includes our signature 8-piece chicken bucket with original recipe seasoning, two large portions of crispy french fries, and two cold beverages. Perfect for sharing with family or friends, this combo offers great value and ensures everyone gets enough delicious food to satisfy their appetite completely.", imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop" },
                    { id: 20, name: "Wings Combo", price: 449, description: "Enjoy six pieces of our spicy chicken wings cooked to perfection, served with a side of golden crispy french fries and a cold refreshing drink. This combo is perfect for those who love wings and want a complete meal experience with great taste and excellent value for money.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" },
                    { id: 21, name: "Family Feast", price: 1299, description: "Our ultimate family feast includes twelve pieces of our signature fried chicken with original recipe seasoning, four large portions of golden french fries, and four cold beverages. This feast is designed to feed the whole family with delicious food that everyone will love and remember for a long time.", imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:3,
        resName: "Dominos",
        cuisine: "Pizza",
        rating: "4.1",
        deliveryTime: "35 min",
        isPromoted: true,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
        menu: [
            { id: 1, name: "Margherita", price: 199, description: "Classic pizza with tomato sauce and mozzarella" },
            { id: 2, name: "Pepperoni", price: 399, description: "Pizza topped with pepperoni and cheese" },
            { id: 3, name: "Veg Supreme", price: 349, description: "Loaded with fresh vegetables and cheese" },
            { id: 4, name: "Chicken Supreme", price: 449, description: "Loaded with chicken and vegetables" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Pepperoni", price: 399, description: "This delicious pizza is topped with premium pepperoni slices and plenty of melted mozzarella cheese on our signature pizza base. The pepperoni provides a spicy and savory flavor that perfectly complements the creamy cheese. Baked to perfection in our ovens, this classic pizza is a favorite among meat lovers and provides great taste and satisfaction.", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop" },
                    { id: 2, name: "Chicken Supreme", price: 449, description: "Our chicken supreme pizza is loaded with tender grilled chicken pieces, fresh vegetables including bell peppers and onions, and topped with generous amounts of melted cheese. This hearty pizza offers a perfect balance of protein and vegetables, making it a complete meal that satisfies hunger and provides great nutritional value.", imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=200&fit=crop" },
                    { id: 3, name: "Veg Supreme", price: 349, description: "This vegetarian pizza is loaded with fresh vegetables including bell peppers, onions, tomatoes, mushrooms, and corn, all topped with plenty of melted mozzarella cheese. Perfect for vegetarians who want a delicious and healthy pizza option that doesn't compromise on taste and provides excellent nutritional benefits with every bite.", imageUrl: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=300&h=200&fit=crop" },
                    { id: 4, name: "Cheese Burst Pizza", price: 479, description: "Our signature cheese burst pizza features a special crust that's filled with melted cheese, creating an amazing cheese-filled border around the pizza. Topped with more cheese and your choice of toppings, this pizza offers double the cheese experience and is perfect for cheese lovers who want extra indulgence.", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Veg Pizzas",
                dishes: [
                    { id: 5, name: "Margherita", price: 199, description: "This classic pizza features our signature tomato sauce base topped with fresh mozzarella cheese and aromatic herbs. Simple yet delicious, this traditional Italian pizza offers pure flavors that showcase the quality of our ingredients. Perfect for those who appreciate classic taste and want a timeless pizza experience that never goes out of style.", imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop" },
                    { id: 6, name: "Veg Supreme", price: 349, description: "This amazing vegetarian pizza is loaded with fresh vegetables including bell peppers, onions, tomatoes, mushrooms, and corn, all topped with plenty of melted cheese. Perfect for vegetarians who want delicious taste without compromising on flavor. Great nutritional value and satisfying taste in every bite.", imageUrl: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=300&h=200&fit=crop" },
                    { id: 7, name: "Farmhouse", price: 329, description: "Our farmhouse pizza comes with fresh onions, colorful capsicum, and juicy tomatoes on our signature pizza base with plenty of melted cheese. This vegetarian option provides great taste and nutrition with farm-fresh vegetables that deliver amazing flavors and textures in every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=300&h=200&fit=crop" },
                    { id: 8, name: "Paneer Makhani", price: 379, description: "This fusion pizza features tender paneer pieces in rich makhani sauce topped with cheese on our pizza base. Perfect blend of Indian flavors with Italian pizza concept. Great for those who love paneer and want to try something different and exciting with amazing taste.", imageUrl: "https://images.unsplash.com/photo-1562438564-b3ad0c4b7b68?w=300&h=200&fit=crop" },
                    { id: 9, name: "Veggie Paradise", price: 299, description: "This vegetarian pizza is loaded with mixed fresh vegetables and plenty of melted cheese on our signature base. Great combination of healthy vegetables with delicious cheese that creates amazing taste and provides good nutrition. Perfect for health-conscious people who love great food.", imageUrl: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Non-Veg Pizzas",
                dishes: [
                    { id: 10, name: "Pepperoni", price: 399, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop" },
                    { id: 11, name: "Chicken Supreme", price: 449, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=200&fit=crop" },
                    { id: 12, name: "Chicken Dominator", price: 499, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=200&fit=crop" },
                    { id: 13, name: "Chicken BBQ", price: 429, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=200&fit=crop" },
                    { id: 14, name: "Meat Lovers", price: 529, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Sides & Beverages",
                dishes: [
                    { id: 15, name: "Garlic Bread", price: 149, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1549985908-597d7c5e8a2b?w=300&h=200&fit=crop" },
                    { id: 16, name: "Chicken Wings", price: 199, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" },
                    { id: 17, name: "Pepsi", price: 59, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=200&fit=crop" },
                    { id: 18, name: "Chocolate Lava Cake", price: 99, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Combo Deals",
                dishes: [
                    { id: 19, name: "Pizza + Garlic Bread Combo", price: 449, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop" },
                    { id: 20, name: "Double Delight", price: 699, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop" },
                    { id: 21, name: "Party Pack", price: 999, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop" },
                    { id: 22, name: "Family Combo", price: 1199, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:4,
        resName: "Pizza Hut",
        cuisine: "Pizza",
        rating: "4.3",
        deliveryTime: "40 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
        menu: [
            { id: 1, name: "Personal Pan Pizza", price: 249, description: "Small pizza perfect for one person" },
            { id: 2, name: "Stuffed Crust Pizza", price: 499, description: "Pizza with cheese-filled crust" },
            { id: 3, name: "Pasta Alfredo", price: 299, description: "Creamy pasta with parmesan sauce" },
            { id: 4, name: "Garlic Bread", price: 149, description: "Toasted bread with garlic butter" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Stuffed Crust Pizza", price: 499, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 2, name: "Supreme Pizza", price: 429, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=200&fit=crop" },
                    { id: 3, name: "Meat Lovers", price: 479, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop" },
                    { id: 4, name: "Veggie Supreme", price: 379, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Signature Pizzas",
                dishes: [
                    { id: 5, name: "Stuffed Crust Pizza", price: 499, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 6, name: "Pan Pizza", price: 349, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 7, name: "Thin & Crispy", price: 299, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 8, name: "Personal Pan Pizza", price: 249, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 9, name: "Cheese Burst", price: 399, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Pasta & Italian",
                dishes: [
                    { id: 10, name: "Pasta Alfredo", price: 299, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 11, name: "Chicken Pasta", price: 349, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 12, name: "Veg Pasta", price: 279, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 13, name: "Lasagna", price: 379, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Sides & Appetizers",
                dishes: [
                    { id: 14, name: "Garlic Bread", price: 149, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1549985908-597d7c5e8a2b?w=300&h=200&fit=crop" },
                    { id: 15, name: "Chicken Wings", price: 229, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" },
                    { id: 16, name: "Mozzarella Sticks", price: 199, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 17, name: "Potato Wedges", price: 169, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Value Combos",
                dishes: [
                    { id: 18, name: "Pizza + Pasta Combo", price: 549, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 19, name: "Duo Combo", price: 799, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 20, name: "Family Pack", price: 1199, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 21, name: "Student Special", price: 399, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:5,
        resName: "Burger King",
        cuisine: "Burger",
        rating: "4.4",
        deliveryTime: "20 min",
        isPromoted: true,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        menu: [
            { id: 1, name: "Whopper", price: 249, description: "Flame-grilled beef patty with fresh vegetables" },
            { id: 2, name: "Chicken Royale", price: 199, description: "Crispy chicken fillet with fresh lettuce" },
            { id: 3, name: "Veg Whopper", price: 229, description: "Plant-based patty with fresh vegetables" },
            { id: 4, name: "French Fries", price: 99, description: "Crispy golden fries" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Whopper", price: 249, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 2, name: "Chicken Royale", price: 199, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
                    { id: 3, name: "Veg Whopper", price: 229, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1525755662312-b2e9d8a80d5e?w=300&h=200&fit=crop" },
                    { id: 4, name: "Double Whopper", price: 329, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Flame Grilled Burgers",
                dishes: [
                    { id: 5, name: "Whopper", price: 249, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 6, name: "Double Whopper", price: 329, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop" },
                    { id: 7, name: "Whopper Jr", price: 179, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 8, name: "Triple Whopper", price: 399, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop" },
                    { id: 9, name: "Bacon Whopper", price: 289, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Chicken Burgers",
                dishes: [
                    { id: 10, name: "Chicken Royale", price: 199, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
                    { id: 11, name: "Chicken Whopper", price: 229, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
                    { id: 12, name: "Spicy Chicken", price: 209, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
                    { id: 13, name: "Chicken Deluxe", price: 189, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Veg Options",
                dishes: [
                    { id: 14, name: "Veg Whopper", price: 229, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1525755662312-b2e9d8a80d5e?w=300&h=200&fit=crop" },
                    { id: 15, name: "Veg Deluxe", price: 179, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1525755662312-b2e9d8a80d5e?w=300&h=200&fit=crop" },
                    { id: 16, name: "Paneer King", price: 199, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1525755662312-b2e9d8a80d5e?w=300&h=200&fit=crop" },
                    { id: 17, name: "Crispy Veg", price: 159, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1525755662312-b2e9d8a80d5e?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "King Deals",
                dishes: [
                    { id: 18, name: "Whopper Combo", price: 349, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 19, name: "King Meal", price: 429, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop" },
                    { id: 20, name: "Family Pack", price: 899, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 21, name: "Budget Combo", price: 249, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:6,
        resName: "Subway",
        cuisine: "Healthy Food, Salads, Sandwiches",
        rating: "4.0",
        deliveryTime: "22 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
        menu: [
            { id: 1, name: "Veg Delite", price: 199, description: "Fresh vegetables with choice of bread" },
            { id: 2, name: "Chicken Teriyaki", price: 249, description: "Grilled chicken with teriyaki sauce" },
            { id: 3, name: "Tuna Sub", price: 229, description: "Tuna with fresh vegetables" },
            { id: 4, name: "Veggie Patty", price: 219, description: "Plant-based patty with vegetables" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Chicken Teriyaki", price: 249, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 2, name: "Turkey Breast", price: 269, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 3, name: "Veggie Delite", price: 199, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 4, name: "Italian BMT", price: 259, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Chicken Subs",
                dishes: [
                    { id: 5, name: "Chicken Teriyaki", price: 249, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 6, name: "Chicken Breast", price: 239, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 7, name: "Buffalo Chicken", price: 259, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 8, name: "Chicken BBQ", price: 249, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 9, name: "Chicken Tikka", price: 269, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Vegetarian Options",
                dishes: [
                    { id: 10, name: "Veg Delite", price: 199, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 11, name: "Veggie Patty", price: 219, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 12, name: "Paneer Tikka", price: 229, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 13, name: "Aloo Patty", price: 199, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Salads & Wraps",
                dishes: [
                    { id: 14, name: "Chicken Caesar Salad", price: 219, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop" },
                    { id: 15, name: "Veggie Salad", price: 189, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop" },
                    { id: 16, name: "Chicken Wrap", price: 229, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 17, name: "Tuna Salad", price: 209, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Combo Meals",
                dishes: [
                    { id: 18, name: "Sub + Cookie Combo", price: 299, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 19, name: "Footlong Combo", price: 379, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" },
                    { id: 20, name: "Salad Combo", price: 269, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop" },
                    { id: 21, name: "Healthy Combo", price: 319, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:7,
        resName: "Beijing Bites",
        cuisine: "Chinese, Thai, Pan Asian",
        rating: "3.9",
        deliveryTime: "28 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4a3b48488e3aa9bda13efd8cfcd95284",
        menu: [
            { id: 1, name: "Chicken Noodles", price: 199, description: "Stir-fried noodles with chicken" },
            { id: 2, name: "Veg Fried Rice", price: 179, description: "Classic Chinese fried rice" },
            { id: 3, name: "Sweet and Sour Chicken", price: 249, description: "Crispy chicken in tangy sauce" },
            { id: 4, name: "Spring Rolls", price: 149, description: "Crispy vegetable rolls" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Sweet and Sour Chicken", price: 249, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop" },
                    { id: 2, name: "Chicken Noodles", price: 199, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" },
                    { id: 3, name: "Pad Thai", price: 229, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=200&fit=crop" },
                    { id: 4, name: "Kung Pao Chicken", price: 259, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Chinese Classics",
                dishes: [
                    { id: 5, name: "Sweet and Sour Chicken", price: 249, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop" },
                    { id: 6, name: "Chicken Manchurian", price: 239, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop" },
                    { id: 7, name: "Honey Chilli Chicken", price: 269, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop" },
                    { id: 8, name: "General Tso's Chicken", price: 279, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop" },
                    { id: 9, name: "Orange Chicken", price: 259, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Noodles & Rice",
                dishes: [
                    { id: 10, name: "Chicken Noodles", price: 199, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" },
                    { id: 11, name: "Veg Fried Rice", price: 179, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop" },
                    { id: 12, name: "Chicken Fried Rice", price: 209, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop" },
                    { id: 13, name: "Singapore Rice Noodles", price: 219, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" },
                    { id: 14, name: "Schezwan Noodles", price: 189, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Thai Specialties",
                dishes: [
                    { id: 15, name: "Pad Thai", price: 229, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=200&fit=crop" },
                    { id: 16, name: "Thai Green Curry", price: 249, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300&h=200&fit=crop" },
                    { id: 17, name: "Tom Yum Soup", price: 179, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop" },
                    { id: 18, name: "Thai Basil Chicken", price: 239, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Appetizers & Sides",
                dishes: [
                    { id: 19, name: "Spring Rolls", price: 149, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=300&h=200&fit=crop" },
                    { id: 20, name: "Chicken Dumplings", price: 169, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" },
                    { id: 21, name: "Prawn Crackers", price: 99, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=300&h=200&fit=crop" },
                    { id: 22, name: "Chicken Satay", price: 199, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:8,
        resName: "Paradise Biryani",
        cuisine: "Biryani, Hyderabadi",
        rating: "0",
        deliveryTime: "32 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yktanq9i7yfjrixaghuj",
        menu: [
            { id: 1, name: "Hyderabadi Biryani", price: 299, description: "Traditional Hyderabadi style biryani" },
            { id: 2, name: "Chicken Biryani", price: 349, description: "Fragrant biryani with tender chicken" },
            { id: 3, name: "Veg Biryani", price: 249, description: "Vegetarian biryani with mixed vegetables" },
            { id: 4, name: "Mutton Biryani", price: 399, description: "Rich biryani with tender mutton" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Hyderabadi Biryani", price: 299, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 2, name: "Chicken Biryani", price: 349, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 3, name: "Mutton Biryani", price: 399, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
                    { id: 4, name: "Paradise Special Biryani", price: 429, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Classic Biryanis",
                dishes: [
                    { id: 5, name: "Hyderabadi Biryani", price: 299, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 6, name: "Chicken Biryani", price: 349, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 7, name: "Mutton Biryani", price: 399, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
                    { id: 8, name: "Beef Biryani", price: 379, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
                    { id: 9, name: "Prawn Biryani", price: 389, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Vegetarian Biryanis",
                dishes: [
                    { id: 10, name: "Veg Biryani", price: 249, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" },
                    { id: 11, name: "Paneer Biryani", price: 279, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" },
                    { id: 12, name: "Mushroom Biryani", price: 259, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" },
                    { id: 13, name: "Egg Biryani", price: 229, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Accompaniments",
                dishes: [
                    { id: 14, name: "Raita", price: 79, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1589364265003-ceb3cccebf65?w=300&h=200&fit=crop" },
                    { id: 15, name: "Shorba", price: 99, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop" },
                    { id: 16, name: "Boiled Eggs", price: 49, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=300&h=200&fit=crop" },
                    { id: 17, name: "Pickle", price: 29, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1589364265003-ceb3cccebf65?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Family Packs",
                dishes: [
                    { id: 18, name: "Family Biryani Pack", price: 899, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 19, name: "Mixed Biryani Combo", price: 749, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 20, name: "Paradise Special Pack", price: 1199, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 21, name: "Party Pack", price: 1599, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:9,
        resName: "McDonald's",
        cuisine: "Burgers, Fast Food, Beverages",
        rating: "4.2",
        deliveryTime: "18 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
        menu: [
            { id: 1, name: "Big Mac", price: 249, description: "Two beef patties with special sauce" },
            { id: 2, name: "McChicken", price: 199, description: "Crispy chicken patty with lettuce" },
            { id: 3, name: "McVeggie", price: 179, description: "Vegetarian patty with fresh vegetables" },
            { id: 4, name: "French Fries", price: 99, description: "World famous fries" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Big Mac", price: 249, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 2, name: "McChicken", price: 199, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
                    { id: 3, name: "Quarter Pounder", price: 279, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 4, name: "Chicken McNuggets", price: 179, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Burgers",
                dishes: [
                    { id: 5, name: "Big Mac", price: 249, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 6, name: "Quarter Pounder", price: 279, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 7, name: "McChicken", price: 199, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
                    { id: 8, name: "McVeggie", price: 179, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1525755662312-b2e9d8a80d5e?w=300&h=200&fit=crop" },
                    { id: 9, name: "Cheeseburger", price: 149, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Chicken & Nuggets",
                dishes: [
                    { id: 10, name: "Chicken McNuggets 6pc", price: 179, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=300&h=200&fit=crop" },
                    { id: 11, name: "Chicken McNuggets 10pc", price: 259, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=300&h=200&fit=crop" },
                    { id: 12, name: "McChicken", price: 199, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop" },
                    { id: 13, name: "Chicken Wings", price: 219, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Sides & Desserts",
                dishes: [
                    { id: 14, name: "French Fries", price: 99, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop" },
                    { id: 15, name: "Apple Pie", price: 89, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1621303837174-89787a4d4729?w=300&h=200&fit=crop" },
                    { id: 16, name: "McFlurry", price: 129, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" },
                    { id: 17, name: "Hash Browns", price: 69, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Happy Meals",
                dishes: [
                    { id: 18, name: "Chicken McNuggets Happy Meal", price: 199, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=300&h=200&fit=crop" },
                    { id: 19, name: "Cheeseburger Happy Meal", price: 189, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 20, name: "McVeggie Happy Meal", price: 179, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1525755662312-b2e9d8a80d5e?w=300&h=200&fit=crop" },
                    { id: 21, name: "Fish Fillet Happy Meal", price: 209, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:10,
        resName: "Taco Bell",
        cuisine: "Mexican, Fast Food",
        rating: "4.1",
        deliveryTime: "25 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        menu: [
            { id: 1, name: "Crunchy Taco", price: 149, description: "Crispy taco with seasoned beef" },
            { id: 2, name: "Bean Burrito", price: 179, description: "Flour tortilla with beans and cheese" },
            { id: 3, name: "Nachos", price: 199, description: "Crispy tortilla chips with cheese" },
            { id: 4, name: "Quesadilla", price: 249, description: "Grilled tortilla with cheese and chicken" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Crunchy Taco Supreme", price: 179, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 2, name: "Quesadilla", price: 249, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=300&h=200&fit=crop" },
                    { id: 3, name: "Mexican Rice Bowl", price: 229, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=300&h=200&fit=crop" },
                    { id: 4, name: "Nachos Supreme", price: 269, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Tacos",
                dishes: [
                    { id: 5, name: "Crunchy Taco", price: 149, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 6, name: "Soft Taco", price: 139, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 7, name: "Crunchy Taco Supreme", price: 179, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 8, name: "Chicken Taco", price: 159, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 9, name: "Fish Taco", price: 189, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Burritos & Wraps",
                dishes: [
                    { id: 10, name: "Bean Burrito", price: 179, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 11, name: "Chicken Burrito", price: 219, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 12, name: "Beef Burrito", price: 229, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 13, name: "Veggie Wrap", price: 199, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Nachos & Sides",
                dishes: [
                    { id: 14, name: "Nachos", price: 199, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop" },
                    { id: 15, name: "Nachos Supreme", price: 269, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop" },
                    { id: 16, name: "Mexican Rice", price: 89, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=300&h=200&fit=crop" },
                    { id: 17, name: "Refried Beans", price: 79, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Combo Meals",
                dishes: [
                    { id: 18, name: "Taco Combo", price: 299, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 19, name: "Burrito Combo", price: 349, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 20, name: "Mexican Feast", price: 499, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 21, name: "Family Pack", price: 699, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:11,
        resName: "Wow! Momo",
        cuisine: "Tibetan, Healthy Food",
        rating: "3",
        deliveryTime: "22 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5a148e63e9c54942e37627da1aa156be",
        menu: [
            { id: 1, name: "Chicken Momos", price: 199, description: "Steamed dumplings with chicken filling" },
            { id: 2, name: "Veg Momos", price: 179, description: "Steamed dumplings with vegetable filling" },
            { id: 3, name: "Paneer Momos", price: 189, description: "Steamed dumplings with paneer filling" },
            { id: 4, name: "Tandoori Momos", price: 249, description: "Grilled momos with spicy marinade" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Chicken Momos", price: 199, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" },
                    { id: 2, name: "Tandoori Momos", price: 249, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" },
                    { id: 3, name: "Chocolate Momos", price: 179, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop" },
                    { id: 4, name: "Kurkure Momos", price: 229, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Steamed Momos",
                dishes: [
                    { id: 5, name: "Chicken Momos", price: 199, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" },
                    { id: 6, name: "Veg Momos", price: 179, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" },
                    { id: 7, name: "Paneer Momos", price: 189, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" },
                    { id: 8, name: "Mushroom Momos", price: 199, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" },
                    { id: 9, name: "Corn & Cheese Momos", price: 189, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Fried & Grilled",
                dishes: [
                    { id: 10, name: "Tandoori Momos", price: 249, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" },
                    { id: 11, name: "Kurkure Momos", price: 229, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" },
                    { id: 12, name: "Pan Fried Momos", price: 219, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" },
                    { id: 13, name: "Schezwan Momos", price: 239, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Soups & Thukpa",
                dishes: [
                    { id: 14, name: "Momo Soup", price: 149, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop" },
                    { id: 15, name: "Chicken Thukpa", price: 179, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" },
                    { id: 16, name: "Veg Thukpa", price: 159, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" },
                    { id: 17, name: "Wonton Soup", price: 169, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Sweet Momos",
                dishes: [
                    { id: 18, name: "Chocolate Momos", price: 179, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop" },
                    { id: 19, name: "Date & Nuts Momos", price: 199, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop" },
                    { id: 20, name: "Nutella Momos", price: 189, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop" },
                    { id: 21, name: "Apple Cinnamon Momos", price: 169, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:12,
        resName: "Behrouz Biryani",
        cuisine: "Biryani, Mughlai, Lucknowi",
        rating: "0",
        deliveryTime: "35 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89fccaa76f2f760e2742b9e53d32bb69",
        menu: [
            { id: 1, name: "Royal Chicken Biryani", price: 399, description: "Premium biryani with tender chicken" },
            { id: 2, name: "Veg Biryani", price: 299, description: "Vegetarian biryani with fresh vegetables" },
            { id: 3, name: "Mutton Biryani", price: 449, description: "Rich biryani with tender mutton" },
            { id: 4, name: "Paneer Biryani", price: 349, description: "Vegetarian biryani with paneer" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Royal Chicken Biryani", price: 399, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 2, name: "Mutton Biryani", price: 449, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
                    { id: 3, name: "Biryani Combo", price: 499, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop" },
                    { id: 4, name: "Lucknowi Biryani", price: 429, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Royal Biryanis",
                dishes: [
                    { id: 5, name: "Royal Chicken Biryani", price: 399, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 6, name: "Mutton Biryani", price: 449, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
                    { id: 7, name: "Lucknowi Biryani", price: 429, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 8, name: "Hyderabadi Biryani", price: 419, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 9, name: "Behrouz Special Biryani", price: 479, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Vegetarian Biryanis",
                dishes: [
                    { id: 10, name: "Veg Biryani", price: 299, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" },
                    { id: 11, name: "Paneer Biryani", price: 349, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" },
                    { id: 12, name: "Mushroom Biryani", price: 329, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" },
                    { id: 13, name: "Dum Aloo Biryani", price: 319, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Kebabs & Starters",
                dishes: [
                    { id: 14, name: "Seekh Kebab", price: 279, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" },
                    { id: 15, name: "Chicken Tikka", price: 259, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
                    { id: 16, name: "Mutton Seekh", price: 299, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" },
                    { id: 17, name: "Reshmi Kebab", price: 269, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Royal Combos",
                dishes: [
                    { id: 18, name: "Biryani + Kebab Combo", price: 499, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop" },
                    { id: 19, name: "Royal Feast", price: 699, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop" },
                    { id: 20, name: "Family Pack", price: 999, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop" },
                    { id: 21, name: "Mughlai Combo", price: 649, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:13,
        resName: "Faasos",
        cuisine: "Wraps, Fast Food",
        rating: "4.1",
        deliveryTime: "29 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af33b81798b11deba338e94b7585d348",
        menu: [
            { id: 1, name: "Chicken Wrap", price: 199, description: "Grilled chicken with fresh vegetables" },
            { id: 2, name: "Paneer Wrap", price: 179, description: "Grilled paneer with vegetables" },
            { id: 3, name: "Veg Wrap", price: 159, description: "Fresh vegetables in a wrap" },
            { id: 4, name: "Chicken Roll", price: 189, description: "Spicy chicken in a paratha" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Chicken Seekh Wrap", price: 219, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 2, name: "Paneer Tikka Wrap", price: 199, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 3, name: "Egg Wrap", price: 149, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 4, name: "Faasos Special Wrap", price: 239, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Chicken Wraps",
                dishes: [
                    { id: 5, name: "Chicken Wrap", price: 199, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 6, name: "Chicken Seekh Wrap", price: 219, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 7, name: "Spicy Chicken Wrap", price: 209, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 8, name: "BBQ Chicken Wrap", price: 229, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 9, name: "Tandoori Chicken Wrap", price: 219, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Vegetarian Wraps",
                dishes: [
                    { id: 10, name: "Paneer Wrap", price: 179, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 11, name: "Veg Wrap", price: 159, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 12, name: "Paneer Tikka Wrap", price: 199, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 13, name: "Aloo Wrap", price: 149, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Rolls & Frankie",
                dishes: [
                    { id: 14, name: "Chicken Roll", price: 189, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 15, name: "Mutton Roll", price: 219, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 16, name: "Egg Roll", price: 139, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 17, name: "Veg Roll", price: 129, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Combo Meals",
                dishes: [
                    { id: 18, name: "Wrap + Fries Combo", price: 279, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 19, name: "Double Wrap Combo", price: 349, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 20, name: "Family Pack", price: 699, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
                    { id: 21, name: "Lunch Special", price: 229, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:14,
        resName: "The Bowl Company",
        cuisine: "Pan Asian, Continental",
        rating: "4.4",
        deliveryTime: "26 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb6049fae59b8a2413a9177eb0338b49",
        menu: [
            { id: 1, name: "Buddha Bowl", price: 299, description: "Healthy bowl with grains and vegetables" },
            { id: 2, name: "Poke Bowl", price: 349, description: "Hawaiian style bowl with fresh fish" },
            { id: 3, name: "Buddha Bowl", price: 299, description: "Healthy bowl with grains and vegetables" },
            { id: 4, name: "Buddha Bowl", price: 299, description: "Healthy bowl with grains and vegetables" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Poke Bowl", price: 349, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 2, name: "Buddha Bowl", price: 299, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 3, name: "Thai Curry Bowl", price: 329, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 4, name: "Teriyaki Chicken Bowl", price: 319, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Asian Bowls",
                dishes: [
                    { id: 5, name: "Thai Curry Bowl", price: 329, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 6, name: "Teriyaki Chicken Bowl", price: 319, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 7, name: "Korean BBQ Bowl", price: 339, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 8, name: "Pad Thai Bowl", price: 309, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 9, name: "Ramen Bowl", price: 289, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Healthy Bowls",
                dishes: [
                    { id: 10, name: "Buddha Bowl", price: 299, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 11, name: "Quinoa Power Bowl", price: 319, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 12, name: "Mediterranean Bowl", price: 309, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 13, name: "Detox Green Bowl", price: 279, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Protein Bowls",
                dishes: [
                    { id: 14, name: "Poke Bowl", price: 349, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 15, name: "Chicken Power Bowl", price: 329, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 16, name: "Tofu Buddha Bowl", price: 289, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 17, name: "Paneer Tikka Bowl", price: 299, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Bowl Combos",
                dishes: [
                    { id: 18, name: "Bowl + Soup Combo", price: 399, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 19, name: "Double Bowl Deal", price: 549, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 20, name: "Healthy Combo", price: 449, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" },
                    { id: 21, name: "Family Share", price: 899, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop" }
                ]
            }
        ]
    },
    {   id:15,
        resName: "Empire Restaurant",
        cuisine: "North Indian, Biryani, Kebabs",
        rating: "4.3",
        deliveryTime: "25 min",
        isPromoted: false,
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
        menu: [
            { id: 1, name: "Butter Chicken", price: 299, description: "Tender chicken in rich tomato gravy" },
            { id: 2, name: "Chicken Biryani", price: 249, description: "Fragrant biryani with chicken" },
            { id: 3, name: "Seekh Kebab", price: 199, description: "Grilled minced meat kebabs" },
            { id: 4, name: "Naan", price: 49, description: "Freshly baked tandoori bread" }
        ],
        categories: [
            {
                name: "Recommended",
                dishes: [
                    { id: 1, name: "Butter Chicken", price: 299, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 2, name: "Chicken Biryani", price: 249, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 3, name: "Seekh Kebab", price: 199, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
                    { id: 4, name: "Dal Makhani", price: 179, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "North Indian Curries",
                dishes: [
                    { id: 5, name: "Butter Chicken", price: 299, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
                    { id: 6, name: "Chicken Tikka Masala", price: 289, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
                    { id: 7, name: "Paneer Butter Masala", price: 249, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&h=200&fit=crop" },
                    { id: 8, name: "Dal Makhani", price: 179, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
                    { id: 9, name: "Palak Paneer", price: 219, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Biryanis",
                dishes: [
                    { id: 10, name: "Chicken Biryani", price: 249, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop" },
                    { id: 11, name: "Mutton Biryani", price: 329, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop" },
                    { id: 12, name: "Veg Biryani", price: 199, description: "This exceptional dish combines traditional cooking methods with modern presentation to create an unforgettable dining experience. Each portion is prepared fresh using the finest ingredients available, ensuring maximum flavor and satisfaction with every single bite you take.", imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" },
                    { id: 13, name: "Egg Biryani", price: 179, description: "Enjoy this wonderful creation that brings together the best ingredients and cooking techniques to deliver outstanding taste and quality. Our commitment to excellence shines through in every aspect of this dish, from preparation to presentation and final delivery.", imageUrl: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Tandoori & Kebabs",
                dishes: [
                    { id: 14, name: "Seekh Kebab", price: 199, description: "This outstanding menu selection features carefully chosen ingredients that are prepared using authentic recipes and cooking methods. The result is a dish that not only tastes amazing but also provides great nutritional value and satisfying portions for our valued customers.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" },
                    { id: 15, name: "Chicken Tikka", price: 229, description: "Discover the incredible flavors and textures of this specially prepared dish that showcases our dedication to quality and customer satisfaction. Made with the finest ingredients and expert cooking techniques, this item delivers exceptional taste and value that exceeds expectations every time.", imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
                    { id: 16, name: "Tandoori Chicken", price: 279, description: "This amazing dish features premium ingredients cooked to perfection with special seasonings and spices. Our chefs prepare this item with care and attention to detail, ensuring every bite delivers exceptional taste and quality. Perfect for those who appreciate great food and want a satisfying meal experience that exceeds expectations.", imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop" },
                    { id: 17, name: "Paneer Tikka", price: 199, description: "This delicious item is made with fresh, high-quality ingredients and traditional cooking methods that bring out the best flavors. Each serving provides excellent taste and nutritional value, making it a popular choice among customers who want both quality and satisfaction in their dining experience.", imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" }
                ]
            },
            {
                name: "Breads & Rice",
                dishes: [
                    { id: 18, name: "Naan", price: 49, description: "Our signature preparation of this dish combines authentic flavors with modern cooking techniques to create something truly special. The careful balance of ingredients and seasonings results in a memorable meal that satisfies hunger while providing great taste and value for money.", imageUrl: "https://images.unsplash.com/photo-1549985908-597d7c5e8a2b?w=300&h=200&fit=crop" },
                    { id: 19, name: "Butter Naan", price: 59, description: "This popular menu item features carefully selected ingredients prepared using time-tested recipes and cooking methods. The result is a flavorful and satisfying dish that appeals to a wide range of tastes and preferences, making it perfect for any occasion.", imageUrl: "https://images.unsplash.com/photo-1549985908-597d7c5e8a2b?w=300&h=200&fit=crop" },
                    { id: 20, name: "Garlic Naan", price: 69, description: "Prepared with the finest ingredients and cooked to perfection, this dish offers exceptional taste and quality in every bite. Our commitment to excellence ensures that each serving meets our high standards for flavor, freshness, and overall dining satisfaction.", imageUrl: "https://images.unsplash.com/photo-1549985908-597d7c5e8a2b?w=300&h=200&fit=crop" },
                    { id: 21, name: "Jeera Rice", price: 89, description: "Experience the perfect blend of flavors and textures in this carefully crafted dish that showcases our culinary expertise. Made with premium ingredients and attention to detail, this item delivers consistent quality and taste that keeps customers coming back for more every time.", imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop" }
                ]
            }
        ]
    }
];

export default resList;