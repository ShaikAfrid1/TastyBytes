import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setdata] = useState([
    {
      id: "52795",
      title: "Chicken Handi",
      ctrg: "Non-Veg",
      area: "Indian",
      inst: "Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside.\r\nTo the same pot, add the chopped garlic and sauté for a minute. Then add the chopped tomatoes and cook until tomatoes turn soft. This would take about 5 minutes.\r\nThen return the fried onion to the pot and stir. Add ginger paste and sauté well.\r\nNow add the cumin seeds, half of the coriander seeds and chopped green chillies. Give them a quick stir.\r\nNext goes in the spices – turmeric powder and red chilli powder. Sauté the spices well for couple of minutes.\r\nAdd the chicken pieces to the wok, season it with salt to taste and cook the chicken covered on medium-low heat until the chicken is almost cooked through. This would take about 15 minutes. Slowly sautéing the chicken will enhance the flavor, so do not expedite this step by putting it on high heat.\r\nWhen the oil separates from the spices, add the beaten yogurt keeping the heat on lowest so that the yogurt doesn’t split. Sprinkle the remaining coriander seeds and add half of the dried fenugreek leaves. Mix well.\r\nFinally add the cream and give a final mix to combine everything well.\r\nSprinkle the remaining kasuri methi and garam masala and serve the chicken handi hot with naan or rotis. Enjoy!",
      image:
        "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
      strYoutube: "https://www.youtube.com/watch?v=IO0issT0Rmc",
      desc: "Slow-cooked to perfection in a traditional handi (pot), this Chicken Handi is a rich and aromatic North Indian delicacy. Tender chicken pieces are simmered with golden-fried onions, fresh tomatoes, and a bold blend of spices. The magic unfolds as yogurt, cream, and dried fenugreek (kasuri methi) are stirred in, creating a velvety, flavorful gravy. Finished with garam masala and served hot with naan or rotis — this dish is comfort food with a regal twist!",
      ing: "Chicken - 1.2 kg, Onion - 5 thinly sliced, Tomatoes - 2 finely chopped, Garlic - 8 cloves chopped, Ginger paste - 1 tbsp, Vegetable oil - ¼ cup, Cumin seeds - 2tsp,Coriander seeds - 3 tsp, Turmeric powder - 1 tsp, Chilli powder - 1 tsp, Green chilli - 2,  Yogurt - 1 cup, Cream - ¾ cup, fenugreek - 3 tsp Dried, Garam masala - 1 tsp, Salt - To taste",
    },
    {
      id: "52806",
      title: "Tandoori chicken",
      ctrg: "Non-Veg",
      inst: "Mix the lemon juice with the paprika and red onions in a large shallow dish. Slash each chicken thigh three times, then turn them in the juice and set aside for 10 mins.\r\nMix all of the marinade ingredients together and pour over the chicken. Give everything a good mix, then cover and chill for at least 1 hr. This can be done up to a day in advance.\r\nHeat the grill. Lift the chicken pieces onto a rack over a baking tray. Brush over a little oil and grill for 8 mins on each side or until lightly charred and completely cooked through.",
      image:
        "https://plus.unsplash.com/premium_photo-1695931841253-1e17e7ed59b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fHww",
      ing: "lemons - 2 Juice, paprika - 4 tsp, red onions - 2 finely chopped, chicken thighs - 16 skinnless, vegetable oil - For brushing, Greek yogurt - 300ml, ginger - large piece, garlic clove - 4, garam masala - ¾ tsp, ground cumin - ¾ tsp, chilli powder - ½ tsp, turmeric - ¼ tsp",
      desc: "Juicy chicken thighs slashed and soaked in tangy lemon juice, sweet paprika, and red onions—then marinated in a rich, spiced blend and grilled to smoky, charred perfection. A bold and flavorful dish that's easy to prep and hard to resist!",
    },
    {
      id: "52813",
      title: "Kentucky Fried Chicken",
      ctrg: "Non-Veg",
      inst: "Preheat fryer to 350°F. Thoroughly mix together all the spice mix ingredients.\r\nCombine spice mix with flour, brown sugar and salt.\r\nDip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken. Repeat with all the chicken pieces.\r\nLet chicken pieces rest for 5 minutes so crust has a chance to dry a bit.\r\nFry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F.\r\nLet chicken drain on a few paper towels when it comes out of the fryer. Serve hot.",
      image:
        "https://plus.unsplash.com/premium_photo-1684351369708-0eecc53e2691?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtlbnR1Y2t5JTIwZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww",

      ing: "Chicken - 1 whole, Oil - 2 quarts neutral frying, Egg White - 1, Flour - 1 1/2 cups, Brown Sugar - 1 tablespoon, Salt - 1 tablespoon, paprika - 1 tablespoon, onion salt - 2 teaspoons, chili powder - 1 teaspoon, black pepper - 1 teaspoon, celery salt - 1/2 teaspoon, sage - 1/2 teaspoon, garlic powder - 1/2 teaspoon, allspice - 1/2 teaspoon, oregano - 1/2 teaspoon, basil - 1/2 teaspoon, marjoram - 1/2 teaspoon",
      desc: "Crispy, golden perfection! Juicy chicken pieces coated in a flavorful blend of spices and flour, then fried until irresistibly crunchy on the outside and tender on the inside. A classic comfort dish that’s finger-lickin' good and made to impress!",
    },
    {
      id: "52814",
      title: "Grilled Chicken Tikka",
      ctrg: "Non-Veg",
      inst: "Mix the lemon juice with the paprika and red onions in a large shallow dish. Slash each chicken thigh three times, then turn them in the juice and set aside for 10 mins.\r\nMix all of the marinade ingredients together and pour over the chicken. Give everything a good mix, then cover and chill for at least 1 hr. This can be done up to a day in advance.\r\nHeat the grill. Lift the chicken pieces onto a rack over a baking tray. Brush over a little oil and grill for 8 mins on each side or until lightly charred and completely cooked through.",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fHww",
      ing: "Chicken thighs - 6, Lemon juice - 2 tbsp, Paprika - 1 tbsp, Red onions - 1 sliced, Yogurt - 3 tbsp, Garlic - 4 cloves crushed, Ginger - 1 inch grated, Garam masala - 1 tsp, Ground coriander - 1 tsp, Cumin - 1 tsp, Turmeric - 1/2 tsp, Salt - to taste",
      desc: "Juicy, spicy, and char-grilled to perfection! Chicken tikka is marinated in rich Indian spices and grilled until smoky, making it a true desi BBQ favorite.",
    },
    {
      id: "52816",
      title: "Paneer Butter Masala",
      ctrg: "Veg",
      inst: "Heat 2 tbsp butter in a pan. Add chopped onions and sauté till golden. Add ginger-garlic paste and cook till raw smell disappears. Add tomato puree and cook till oil separates. Add red chili powder, garam masala, and salt. Mix well.\r\nAdd paneer cubes and mix gently. Add cream and simmer for 5 minutes. Garnish with kasuri methi and a swirl of cream. Serve hot with naan or rice.",
      image:
        "https://media.istockphoto.com/id/1355695225/photo/paneer-masala-a-curry-made-with-cottage-cheese-cubes-cooked-in-a-gravy-of-onions-tomatoes-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=NWyMaLvn81CmeNgg02vDNPGfLQSTH7QfLZVcLL0HCZk=",
      ing: "Paneer - 250g, Onion - 1 chopped, Tomato puree - 1 cup, Cream - 1/2 cup, Butter - 2 tbsp, Ginger-garlic paste - 1 tbsp, Red chili powder - 1 tsp, Garam masala - 1/2 tsp, Salt - to taste, Kasuri methi - 1 tsp",
      desc: "Creamy and dreamy! This rich Paneer Butter Masala is a North Indian favorite, perfect for dunking your naan or spooning over hot rice.",
    },
    {
      id: "52817",
      title: "Hyderabadi Biryani",
      ctrg: "Non-Veg",
      inst: "Marinate chicken with yogurt, ginger-garlic paste, fried onions, mint, coriander, lemon juice, and spices. Let it rest for 2 hours. Cook basmati rice till 70% done.\r\nLayer chicken and rice in a heavy-bottomed pot. Add saffron milk and ghee on top. Seal with dough and cook on dum for 30-40 minutes.\r\nLet it rest for 10 mins before opening. Mix gently and serve with raita or salan.",
      image:
        "https://plus.unsplash.com/premium_photo-1694141251673-1758913ade48?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ing: "Chicken - 500g, Basmati rice - 2 cups, Yogurt - 1 cup, Fried onions - 1 cup, Mint - 1/2 cup, Coriander - 1/2 cup, Lemon - 1, Saffron - few strands, Milk - 1/4 cup, Ghee - 2 tbsp, Spices - as needed",
      desc: "An iconic Indian dish that layers fragrant rice and spicy marinated chicken, cooked on dum for unmatched flavor in every bite.",
    },
    {
      id: "52818",
      title: "Palak Paneer",
      ctrg: "Veg",
      inst: "Blanch spinach in boiling water for 2 mins, then blend to a smooth paste. Heat oil, sauté cumin and onions till soft. Add ginger-garlic paste, tomatoes, and cook till oil separates.\r\nAdd spinach puree, garam masala, salt, and cook for 5 mins. Add paneer cubes and simmer for another 5 mins. Finish with a dollop of cream if desired.",
      image:
        "https://media.istockphoto.com/id/2147564917/photo/palak-paneer-with-basmati-rice-and-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=lyvsWawZ2UNgtwRtW8C4F7Uj7h4jNobtAEDeP5whc48=",
      ing: "Spinach - 250g, Paneer - 200g, Onion - 1, Tomato - 1, Ginger-garlic paste - 1 tbsp, Cumin - 1/2 tsp, Garam masala - 1/2 tsp, Salt - to taste, Cream - optional",
      desc: "Healthy meets hearty! Palak Paneer brings iron-rich spinach and soft paneer together in a comforting, creamy curry.",
    },
    {
      id: "52819",
      title: "Chole Masala",
      ctrg: "Veg",
      inst: "Soak chickpeas overnight and pressure cook until soft. Heat oil, add cumin, bay leaf, and chopped onions. Sauté till golden.\r\nAdd ginger-garlic paste, tomatoes, turmeric, coriander, chili, and chole masala. Cook till oil separates. Add chickpeas and simmer for 15 mins. Garnish with coriander.",
      image:
        "https://media.istockphoto.com/id/1295943731/photo/chana-masala-or-chole-in-black-bowl-on-dark-slate-table-top-indian-cuisine-veg-chickpeas.webp?a=1&b=1&s=612x612&w=0&k=20&c=y4piCUqh4PL5-UgQrGhG41fZpFYwmdQfoGCSISag19E=",
      ing: "Chickpeas - 1 cup, Onion - 1, Tomato - 1, Chole masala - 1 tsp, Cumin - 1/2 tsp, Ginger-garlic paste - 1 tbsp, Spices - as needed, Salt - to taste, Coriander - garnish",
      desc: "A Delhi-style street food legend. Spicy, tangy chickpeas cooked till perfection and best paired with bhature or rice.",
    },
    {
      id: "52820",
      title: "Butter Garlic Noodles",
      ctrg: "Veg",
      inst: "Boil noodles as per packet instructions. Drain and keep aside. In a pan, heat butter and sauté minced garlic till fragrant.\r\nAdd chili flakes, pepper, and cooked noodles. Toss well. Add a splash of soy sauce if desired. Garnish with chopped parsley or spring onion.",
      image:
        "https://media.istockphoto.com/id/1352567176/photo/homemade-cooked-shrimp-scampi-with-pasta.webp?a=1&b=1&s=612x612&w=0&k=20&c=bOKJnhw0-sesuMwyDocSwbdqt9A-2Jjn5wk628QfRMs=",
      ing: "Noodles - 200g, Butter - 2 tbsp, Garlic - 5 cloves minced, Chili flakes - 1 tsp, Pepper - 1/2 tsp, Soy sauce - 1 tsp, Salt - to taste",
      desc: "Quick, buttery, garlicky noodles with a spicy kick! A weeknight favorite and ultimate comfort bowl.",
    },
    {
      id: "52821",
      title: "Gobi Manchurian",
      ctrg: "Veg",
      inst: "Parboil cauliflower florets. Coat with cornflour, all-purpose flour, chili powder, and deep fry till crispy.\r\nIn a pan, heat oil, add garlic, green chili, onion, and capsicum. Stir fry and add soy sauce, vinegar, chili sauce, and ketchup.\r\nAdd fried gobi and toss till well coated. Garnish with spring onions.",
      image:
        "https://media.istockphoto.com/id/1333972712/photo/cabbage-manchurian.webp?a=1&b=1&s=612x612&w=0&k=20&c=UmkXnvTy-ehPGUQ28-7uqbirUpLYiaE6yXD7PnPxEaM=",
      ing: "Cauliflower - 1 medium, Cornflour - 3 tbsp, Maida - 2 tbsp, Chili powder - 1 tsp, Onion - 1, Capsicum - 1, Soy sauce - 1 tbsp, Vinegar - 1 tsp, Chili sauce - 1 tbsp, Garlic - 1 tbsp, Spring onion - garnish",
      desc: "India’s favorite Indo-Chinese starter! Crispy cauliflower tossed in spicy, tangy sauce. Crunchy, saucy, and totally addictive!",
    },
  ]);

  // useEffect(() => {
  //   setdata(JSON.parse(localStorage.getItem("recipes")) || []);
  // }, []);

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
/*   */
