import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../api/api'
import { TriangleAlert, Search } from 'lucide-react'
import { getRole, getUID, isLoginValid } from '../service/auth'

const Products = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [auth, setAuth] = useState(false)
    const [uid, setUID] = useState('')
    const [query, setQuery] = useState('')
    const [fitlerProduct, setFilterProduct] = useState([])
    const role = getRole()
    
    const checkAuth = () => {
        if (isLoginValid && role == "USER") {
            const userid = getUID()
            setAuth(true)
            setUID(userid)
        }
        else {
            setAuth(false)
        }
    }

    async function fetchData() {
        try {
            const res = await getProducts()
            if (res.status === 200) {
                setProducts(res.data)
                setFilterProduct(res.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setQuery(query)

        if (products) {
            const filtered = products.filter((product) =>
                product.title.toLowerCase().includes(query)
            );
            setFilterProduct(filtered)
        }
    };

    useEffect(() => {
        fetchData()
        checkAuth()
    }, [])

    if (loading) {
        return (
            <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                <div className='tablet-loader'>
                    <div className='tablet'>
                        <div className='screen'></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='w-screen h-full flex flex-col justify-center items-center'>
            {/* Search Bar with Advanced Blur Effect */}
            <div className='w-full h-[4rem] flex justify-center items-center'>
                <div className="relative w-[60%] backdrop-blur-sm bg-white/30 p-0.5 rounded-full shadow-lg">
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        className="w-full bg-transparent pl-4 pr-12 py-2 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="What are you looking for?"
                    />
                    {/* Search Icon */}
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
            </div>

            {/* Product List */}
            <div className='max-w-screen-xl w-full h-full flex justify-center items-center flex-wrap mt-14 mb-12 gap-10'>
                {(!fitlerProduct || fitlerProduct.length === 0) ? (
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <TriangleAlert className='text-orange-400 h-12 w-12' />
                        <p>No Medicines Available!</p>
                    </div>
                ) : (
                    fitlerProduct.map((product) => (
                        <div className="flex justify-center w-[30%] lg:w-[28%]" key={product._id}>
                            <ProductCard
                                img={product.img}
                                name={product.title}
                                price={product.price}
                                pid={product._id}
                                auth={auth}
                                uid={uid}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Products
