import type { Prisma, Product } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: { data: { title: 'String', desc: 'String' } },
    two: { data: { title: 'String', desc: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>
