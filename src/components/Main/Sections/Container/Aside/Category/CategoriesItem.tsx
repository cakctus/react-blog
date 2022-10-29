// @ts-nocheck

import { useState, useEffect } from "react"
import articles from "../../../../../../data/articles"

type Props = {}

const CategoriesItem = (props: Props) => {
  const [article, setArticles] = useState()
  const [listArticle, setListArticle] = useState([])

  function check(arr: any) {
    let obj: any = {}
    let array: any = []
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]] += 1
        // array.push(arr[i] + " " + obj[arr[i]])
      } else {
        obj[arr[i]] = 1
        // array.push(arr[i] + obj[arr[i]])
      }
    }

    // console.log(array)
    setArticles(obj)
    return obj
  }

  //   const tags = articles.map((item) => {
  //     const { tag } = item
  //     return tag
  //   })
  //   check(tags.flat())

  //   console.log(check(tags.flat()))

  useEffect(() => {
    document.querySelector(".span-container").innerHTML = ""
    const tags = articles.map((item) => {
      const { tag } = item
      return tag
    })

    check(tags.flat())

    for (let [key, value] of Object.entries(check(tags.flat()))) {
      const span = document.createElement("span")
      span.innerHTML = key

      const span2 = document.createElement("span")
      span2.textContent = value

      const div = document.createElement("div")
      div.setAttribute("class", "span-item")
      div.append(span, span2)

      document.querySelector(".span-container")?.append(div)
    }
  }, [])

  return <div className="span-container"></div>
}

export default CategoriesItem
