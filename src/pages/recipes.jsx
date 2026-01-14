import React, { useState, useEffect } from 'react';

function Recipes() {
  const recipesData = [
    {
      id: 1,
      name: "Nasi Goreng Quinoa Merah",
      image: "",
      price: 35000,
      ingredients: [
        "1 piring Quinoa/Nasi Merah",
        "1 butir Telur Omega",
        "50gr Dada Ayam Rebus (suwir)",
        "Wortel & Jagung pipil secukupnya",
        "1 sdm Minyak Wijen",
        "Tanpa MSG (Ganti dengan Kaldu Jamur)"
      ],
      instructions: [
        "Panaskan minyak wijen, tumis bawang putih hingga harum.",
        "Masukkan telur, buat orak-arik.",
        "Masukkan dada ayam suwir dan sayuran, tumis hingga layu.",
        "Masukkan Quinoa/Nasi Merah, tambahkan kaldu jamur dan kecap asin.",
        "Aduk rata hingga matang, sajikan dengan irisan timun."
      ]
    },
    {
      id: 2,
      name: "Salad Buah Naga 'Ceria'",
      image: "",
      price: 25000,
      ingredients: [
        "1/2 buah Naga Merah",
        "1 buah Pisang Cavendish",
        "Strawberry secukupnya",
        "2 sdm Granola",
        "1 sdm Chia Seeds",
        "Yoghurt Plain"
      ],
      instructions: [
        "Potong buah naga dan pisang menjadi dadu kecil.",
        "Siapkan mangkuk, tuang yoghurt di dasar mangkuk.",
        "Susun buah-buahan di atas yoghurt.",
        "Taburkan granola dan chia seeds sebagai topping.",
        "Sajikan dingin lebih nikmat."
      ]
    },
    {
      id: 3,
      name: "Pepes Ikan Kembung Kemangi",
      image: "",
      price: 20000,
      ingredients: [
        "2 ekor Ikan Kembung segar",
        "Ikat daun kemangi",
        "Bumbu kuning (Kunyit, Jahe, Bawang)",
        "Daun Pisang untuk membungkus",
        "Cabai rawit utuh (opsional)"
      ],
      instructions: [
        "Bersihkan ikan, lumuri dengan jeruk nipis.",
        "Haluskan bumbu kuning, balurkan ke seluruh tubuh ikan.",
        "Ambil daun pisang, tata daun kemangi dan ikan di atasnya.",
        "Bungkus rapat dan sematkan lidi.",
        "Kukus selama 20 menit, lalu bakar sebentar agar wangi."
      ]
    },
    {
      id: 4,
      name: "Smoothie Green Detox",
      image: "",
      price: 18000,
      ingredients: [
        "1 ikat Bayam (ambil daunnya)",
        "1 buah Apel Hijau",
        "1 buah Mentimun",
        "Air perasan Lemon",
        "Sedikit Madu"
      ],
      instructions: [
        "Cuci bersih semua sayur dan buah.",
        "Potong-potong apel dan mentimun.",
        "Masukkan semua bahan ke dalam blender.",
        "Blender hingga halus, tambahkan es batu jika suka.",
        "Minum segera untuk nutrisi maksimal."
      ]
    },
    {
      id: 5,
      name: "Sate Lilit Ayam (Low Fat)",
      image: "",
      price: 30000,
      ingredients: [
        "250gr Dada Ayam Giling",
        "Kelapa parut sangrai (sedikit)",
        "Batang serai untuk tusukan",
        "Daun jeruk iris tipis",
        "Bumbu genep (bumbu khas Bali)"
      ],
      instructions: [
        "Campurkan ayam giling dengan bumbu halus dan kelapa sangrai.",
        "Aduk rata hingga adonan bisa dibentuk.",
        "Ambil sedikit adonan, lilitkan pada batang serai.",
        "Panggang di atas teflon anti lengket dengan sedikit minyak kelapa.",
        "Bolak-balik hingga matang merata."
      ]
    },
    {
      id: 6,
      name: "Gado-Gado Siram",
      image: "",
      price: 22000,
      ingredients: [
        "Lontong",
        "Tahu & Tempe Goreng",
        "Sayuran Rebus (Kangkung, Toge, Kacang Panjang)",
        "Telur Rebus",
        "Bumbu Kacang"
      ],
      instructions: [
        "Siapkan semua bahan di piring saji.",
        "Siram dengan bumbu kacang yang sudah diencerkan.",
        "Taburi bawang goreng dan kerupuk.",
        "Sajikan dengan sambal."
      ]
    },
    {
      id: 7,
      name: "Sop Iga Sapi",
      image: "",
      price: 45000,
      ingredients: [
        "500gr Iga Sapi",
        "Wortel & Kentang",
        "Daun Bawang & Seledri",
        "Bumbu Sop (Bawang Putih, Merica, Pala)",
        "Air"
      ],
      instructions: [
        "Rebus iga sapi hingga empuk.",
        "Tumis bumbu sop hingga harum, masukkan ke dalam rebusan iga.",
        "Masukkan wortel dan kentang, masak hingga matang.",
        "Tambahkan garam dan kaldu bubuk.",
        "Sajikan dengan taburan daun bawang dan seledri."
      ]
    },
    {
      id: 8,
      name: "Tongseng Ayam",
      image: "",
      price: 28000,
      ingredients: [
        "250gr Daging Ayam",
        "Kol & Tomat",
        "Santan",
        "Bumbu Tongseng (Bawang, Kemiri, Kunyit)",
        "Kecap Manis"
      ],
      instructions: [
        "Tumis bumbu tongseng hingga harum.",
        "Masukkan ayam, aduk hingga berubah warna.",
        "Tuang santan dan air, masak hingga mendidih.",
        "Tambahkan kol, tomat, dan kecap manis.",
        "Masak sebentar hingga sayuran layu."
      ]
    },
    {
      id: 9,
      name: "Nasi Uduk Komplit",
      image: "",
      price: 32000,
      ingredients: [
        "Nasi Uduk",
        "Ayam Goreng",
        "Orek Tempe",
        "Bihun Goreng",
        "Sambal & Kerupuk"
      ],
      instructions: [
        "Masak nasi dengan santan, serai, dan daun salam.",
        "Goreng ayam dengan bumbu ungkep.",
        "Tumis tempe dengan bumbu orek.",
        "Goreng bihun dengan sayuran.",
        "Sajikan nasi uduk dengan lauk pauknya."
      ]
    },
    {
      id: 10,
      name: "Asinan Buah",
      image: "",
      price: 15000,
      ingredients: [
        "Bengkuang",
        "Nanas",
        "Mangga Muda",
        "Jambu Air",
        "Kuah Asinan (Cabai, Cuka, Gula)"
      ],
      instructions: [
        "Potong semua buah sesuai selera.",
        "Ulek cabai, campurkan dengan cuka, gula, dan air.",
        "Siram kuah asinan ke dalam campuran buah.",
        "Aduk rata dan simpan di kulkas.",
        "Sajikan dingin."
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [activeRecipeId, setActiveRecipeId] = useState(null);

  useEffect(() => {
    if (recipesData.length > 0) {
      setSelectedRecipe(recipesData[0]);
      setActiveRecipeId(recipesData[0].id);
    }
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setActiveRecipeId(recipe.id);
  };

  const filteredRecipes = recipesData.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1>Search your today's meal!</h1>
      <section className='section'>
        <div className='container'>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <h6>Affordable and Healthy!</h6>
                  <hr />
                  <div className='form-group'>
                    <label className='mb-1'>Search Menu</label>
                    <input
                      type="text"
                      className='form-control'
                      placeholder='Enter your recipes'
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                  <div className="recipe-list-container">
                    {filteredRecipes.map(recipe => (
                      <div
                        key={recipe.id}
                        className={`card mb-2 ${recipe.id === activeRecipeId ? 'active-recipe' : ''}`}
                        onClick={() => handleRecipeClick(recipe)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="card-body">
                          <h5 className="card-title">{recipe.name}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='col-md-6 border-start'>
                  {selectedRecipe ? (
                    <div>
                      <h5 className='main-heading'>{selectedRecipe.name}</h5>
                      <div className='underline'></div>
                      <div className="mb-3">
                        {selectedRecipe.image ? (
                          <img src={selectedRecipe.image} alt={selectedRecipe.name} className="img-fluid" />
                        ) : (
                          <div className="image-placeholder">
                            No Image Available
                          </div>
                        )}
                      </div>
                      <h6>Ingredients:</h6>
                      <ul>
                        {selectedRecipe.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                      <h6>Instructions:</h6>
                      <ol>
                        {selectedRecipe.instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ol>
                      <p>Price: Rp {selectedRecipe.price}</p>
                    </div>
                  ) : (
                    <div>
                      <h5 className='main-heading'>Food name</h5>
                      <div className='underline'></div>
                      <p>Please select a recipe to see the details.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recipes;