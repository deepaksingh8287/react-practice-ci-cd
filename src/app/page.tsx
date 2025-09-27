import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Flipkart UI Clone</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <img src="/flipkart-logo.png" alt="Flipkart Logo" className="h-8" />

          {/* Search */}
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="border rounded px-4 py-2 w-1/2"
          />

          {/* Header links */}
          <div className="flex space-x-6 text-sm font-medium text-gray-700">
            <a href="#">Login</a>
            <a href="#">Cart</a>
            <a href="#">Become a Seller</a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow mt-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 text-sm font-medium">
          {[
            "Minutes",
            "Mobiles & Tablets",
            "Fashion",
            "Electronics",
            "Home & Furniture",
            "TVs & Appliances",
            "Flight Bookings",
            "Beauty, Food..",
            "Grocery",
          ].map((item) => (
            <a key={item} href="#" className="hover:text-blue-600">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto mt-4 px-4">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Beds</h2>
          <p className="mt-1 text-lg">From ₹8,999</p>
          <p className="text-sm">Wooden Street, Sleepyhead & more</p>
        </div>
      </div>

      {/* Best of Electronics */}
      <section className="max-w-7xl mx-auto mt-8 px-4">
        <h2 className="text-xl font-bold mb-4">Best of Electronics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Top Mirrorless Camera", tag: "Shop Now!", img: "/camera.png" },
            { name: "Best True Wireless Headphones", tag: "Grab Now", img: "/headphones.png" },
            { name: "Monitors", tag: "From ₹6599", img: "/monitor.png" },
            { name: "Fastrack Smartwatch", tag: "Explore", img: "/smartwatch.png" },
            { name: "Projectors", tag: "From ₹6999", img: "/projector.png" },
            { name: "Mobile Speakers", tag: "From ₹499", img: "/speaker.png" },
          ].map((product) => (
            <div key={product.name} className="bg-white p-4 rounded-lg shadow text-center">
              <img src={product.img} alt={product.name} className="h-32 mx-auto object-contain" />
              <p className="mt-2 text-sm font-medium">{product.name}</p>
              <p className="text-blue-500 text-xs">{product.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beauty, Food, Toys & more */}
      <section className="max-w-7xl mx-auto mt-8 px-4">
        <h2 className="text-xl font-bold mb-4">Beauty, Food, Toys & more</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: "Skincare", tag: "From ₹199", img: "/skincare.png" },
            { name: "Snacks", tag: "Up to 50% Off", img: "/snacks.png" },
            { name: "Board Games", tag: "From ₹299", img: "/games.png" },
            { name: "Soft Toys", tag: "From ₹399", img: "/toys.png" },
            { name: "Fitness Gear", tag: "From ₹799", img: "/fitness.png" },
            { name: "Stationery", tag: "From ₹49", img: "/stationery.png" },
          ].map((product) => (
            <div key={product.name} className="bg-white p-4 rounded-lg shadow text-center">
              <img src={product.img} alt={product.name} className="h-24 mx-auto object-contain" />
              <p className="mt-2 text-sm font-medium">{product.name}</p>
              <p className="text-blue-500 text-xs">{product.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sidebar Ad */}
      <aside className="max-w-7xl mx-auto mt-8 px-4">
        <div className="bg-yellow-100 text-center p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold">Flipkart Travel</h3>
          <p>Flights from ₹1,499</p>
        </div>
      </aside>

      {/* Footer */}
      <footer className="bg-white mt-12 p-4 text-center text-xs text-gray-500 border-t">
        © 2025 Flipkart Clone. For demo purposes only.
      </footer>
    </div>
  );
}
