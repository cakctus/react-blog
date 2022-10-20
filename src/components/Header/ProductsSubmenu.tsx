import { useState, useRef, useContext, useEffect } from "react"
import Context from "../../context/context"
import axios from "axios"

type Props = {}

const ProductsSubmenu = (props: Props) => {
  const context = useContext(Context)
  const ref = useRef<HTMLDivElement>(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const bottom = parseInt(context?.productsCoords.bottom)
    const element = ref?.current
    // element!.style.position = "absolute"
    // element!.style.left = `0px`
    element!.style.top = `${bottom}px`
  }, [context?.products])

  async function getPosts() {
    try {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=3a73c3d698f8403b94223f5b557284f0"
      const response = await axios.get(url)
      const data = await response.data
      const articles = await data.articles
      setPosts(articles)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (context?.products) getPosts()
  }, [context?.products])

  const onMouseLeave = (e: any) => {
    context?.setProducts(false)
  }

  return (
    <div className="products-submenu" ref={ref} onMouseLeave={onMouseLeave}>
      {posts.map((post, index) => {
        const { urlToImage, title, description } = post

        return (
          <div className="products-container" key={index}>
            <div className="post-image">
              <img className="post-img" src={urlToImage} alt="" />
            </div>
            <h3 className="post-title">{title}</h3>
            <p className="post-content">{description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsSubmenu
