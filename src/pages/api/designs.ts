import { NextApiRequest, NextApiResponse } from 'next'

import execQuery from '../../services/mysql'
import { Design, Image, Category, Product, FormattedDesign } from '../../types/Design'

const Designs = async (req: NextApiRequest, res: NextApiResponse) => {
  // Disable API
  return res.status(500).json({ message: 'Not implemented' })

  try {
    const clientId = process.env.CLIENT_ID

    const query = `
      select d.id, d.title, d.tags, d.product_id, p.name as product_name, p.archived as product_archived, cd.category_id, c.name as category_name, c.color_bg as category_bg, c.color_text as category_text, c.archived as category_archived, pic.id as image_id, pic.url as image_url, pic.url_nextgen as image_webp_url, pic.position as image_position from designs as d
      left join products as p on d.product_id = p.id
      left join category_design as cd on d.id = cd.design_id
      left join categories as c on cd.category_id = c.id
      left join pictures as pic on d.id = pic.design_id
      where d.user_id = ${clientId}
      ORDER BY d.id ASC
    `
    const result = (await execQuery(query)) as Design[]

    const formattedResult = result
      .reduce((acc: FormattedDesign[], design: Design) => {
        const image = <Image>{
          id: design.image_id,
          url: design.image_url,
          webp: design.image_webp_url,
          position: design.image_position
        }

        const category = <Category>{
          id: design.category_id,
          name: design.category_name,
          color_bg: design.category_bg,
          color_text: design.category_text,
          archived: design.category_archived
        }

        const product = <Product>{
          id: design.product_id,
          name: design.product_name,
          archived: design.product_archived
        }

        const formattedDesign = <FormattedDesign>{
          id: design.id,
          title: design.title,
          tags: design.tags,
          product,
          categories: [category],
          images: [image]
        }

        const isDesignInAcc = acc.length >= 1 && acc[acc.length - 1]?.id === design.id

        if (isDesignInAcc) {
          const curPosition = acc.length - 1
          const categories = acc[curPosition].categories

          const categoryByCurId = (category: any) => category.id === design.category_id
          const isCategoryIn = categories.find(categoryByCurId)

          if (!isCategoryIn) {
            acc[curPosition].categories = [...categories, category]
          }

          const images = acc[curPosition].images

          const imageByCurId = (image: any) => image.id === design.image_id
          const isImageIn = images.find(imageByCurId)

          if (!isImageIn) {
            acc[curPosition].images = [...images, image]
          }

          return acc
        }

        acc.push(formattedDesign)

        return acc
      }, [])
      .sort((a, b) => b.id - a.id)

    return res.json(formattedResult)
  } catch {
    return res.status(500)
  }
}

export default Designs
