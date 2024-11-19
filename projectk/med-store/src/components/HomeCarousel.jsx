import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
    <div className="mt-30"> {/* Increased margin-top to 160px */}

      {/* Background Image for Categories with Welcome Offer Text */}
      <div className="relative"> {/* Apply margin only here for the content */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.shutterstock.com/image-vector/blurry-light-soft-cloud-sunrise-260nw-2180029189.jpg" // Replace with your desired background image URL
          alt="Background"
        />
        {/* Welcome Offer Text */}
        <div className="absolute top-10 left-0 right-0 text-center text-white">
          <p className="text-5xl font-semibold text-pink-500 mb-4">Welcome Offer for you!</p>
          <p className="text-lg font-medium text-black">15% OFF on first order | Use Code <span className="font-bold">1MSNEW</span></p>
        </div>

        {/* Category Row with Horizontal Scroll */}
        <div className="relative flex overflow-x-auto space-x-8 px-4 mb-0 pt-40 custom-scrollbar">  {/* Added padding-top to keep space from the background */}
          {/* Category 1 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://www.thehimalayanorganics.in/cdn/shop/files/1702902868114-37.png?v=1711953427&width=1445"
              alt="Category 1"
            />
            <p className="text-xl font-semibold">Vitamin and Nutrition</p>
          </div>
          {/* Category 2 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://www.buddhanatural.com/cdn/shop/files/coconutoilmainimage3d_1.jpg?v=1704885186"
              alt="Category 2"
            />
            <p className="text-xl font-semibold">Skin, Oral and Hair care</p>
          </div>
          {/* Category 3 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/voltaren-delta/en_IN/local_images/Iodex-ultragel%2B493x493_v2.jpg?auto=format"
              alt="Category 3"
            />
            <p className="text-xl font-semibold">Pain relief</p>
          </div>
          {/* Category 4 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://images-cdn.ubuy.co.in/64c2af97d40ab15a0502bfc9-children-s-dimetapp-cold-cough.jpg"
              alt="Category 4"
            />
            <p className="text-xl font-semibold">Cough and cold</p>
          </div>
          {/* Category 5 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://i5.walmartimages.com/asr/fa7f66e1-b449-4326-9fd8-05aa042f2b9b.12663f2db2002aa8220924849d87bbd7.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
              alt="Category 5"
            />
            <p className="text-xl font-semibold">Fever and Head ache</p>
          </div>
          {/* Category 6 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://www.whitewarbler.com/wp-content/uploads/2023/08/Artboard-4.png"
              alt="Category 6"
            />
            <p className="text-xl font-semibold">Healthy snacks</p>
          </div>
          {/* Category 7 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://cdn.shopify.com/s/files/1/0560/7348/6504/articles/Best_feminine_Hygiene_products_every_girl_should_know_about-2_609x_bf04461c-59d3-43bf-9453-8ed9c4fbbcf0_1024x1024.png?v=1618397477"
              alt="Category 7"
            />
            <p className="text-xl font-semibold">Feminine care</p>
          </div>
          {/* Category 8 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://media.post.rvohealth.io/wp-content/uploads/2020/08/505677-HL-Is_Ensure_or_Boost_Healthier-732x549-Thumbnail-732x549.jpg"
              alt="Category 8"
            />
            <p className="text-xl font-semibold">Nutritional drinks</p>
          </div>
          {/* Category 9 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://imgproxy.divecdn.com/GeHrp0Yba2g64FDh-XcVJRcQ3BCUvRhKBg53hNQsZkQ/g:ce/rs:fill:1200:675:1/bG9jYWw6Ly8vZGl2ZWltYWdlL2JvZHlhcm1vci5qcGc=.webp"
              alt="Category 9"
            />
            <p className="text-xl font-semibold">Hydration drinks</p>
          </div>
          {/* Category 10 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://m.media-amazon.com/images/I/81EebyRYntL._AC_UF1000,1000_QL80_.jpg"
              alt="Category 10"
            />
            <p className="text-xl font-semibold">Digestive care</p>
          </div>
          {/* Category 11 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://5.imimg.com/data5/SELLER/Default/2023/6/320272450/CQ/AT/NI/159529598/cosmetics-contract-manufacturing-service.jpg"
              alt="Category 11"
            />
            <p className="text-xl font-semibold">Sun protection</p>
          </div>
          {/* Category 12 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://nypost.com/wp-content/uploads/sites/2/2023/01/powder2.jpg?quality=75&strip=all&w=744"
              alt="Category 12"
            />
            <p className="text-xl font-semibold">Protein supplements</p>
          </div>
          {/* Category 13 */}
          <div className="text-center min-w-[120px]">
            <img
              className="w-24 h-24 object-cover rounded-full mb-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQY7Sl-Egb2_OVYVZJalsln9A7p23m7queHXi9RSWqqguOS7k28z2Z_wHHLNEMYbF3vQ&usqp=CAU"
              alt="Category 13"
            />
            <p className="text-xl font-semibold">Sexual wellness</p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div className="relative">
          <img
            className="h-[50vh] object-cover"
            src="https://cdn.sanity.io/images/0vv8moc6/pharmtech/64e01bf1f7dbd9099e249e9c3247fdbb9a46b4b1-1280x720.jpg"
            alt="Factory Direct"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 to-transparent">
            <div className="absolute top-4 left-4 text-left">
              <p className="text-white text-5xl">Factory Direct</p>
              <p className="text-white text-6xl">Upto 70% Off</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-[50vh] object-cover"
            src="https://skydecengineers.com/wp-content/uploads/2023/09/medical-store.png"
            alt="Medicines"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 to-transparent">
            <div className="absolute top-4 left-4 text-left">
              <p className="text-white text-5xl">Medicines</p>
              <p className="text-white text-6xl">20% Off</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-[50vh] object-cover"
            src="https://images2.alphacoders.com/133/1330529.png"
            alt="Diagnostics"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 to-transparent">
            <div className="absolute top-4 left-4 text-left">
              <p className="text-white text-5xl">Diagnostics</p>
              <p className="text-white text-6xl">75% Off</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-[50vh] object-cover"
            src="https://t3.ftcdn.net/jpg/00/81/99/34/360_F_81993402_vbYaI7g7DYw9XAUG1JQ7RkApGAsVSWGE.jpg"
            alt="Doctor Consultation"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 to-transparent">
            <div className="absolute top-4 left-4 text-left">
              <p className="text-white text-5xl">Doctor Consultation</p>
              <p className="text-white text-6xl">50% Off</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
