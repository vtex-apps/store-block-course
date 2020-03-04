
export const gif = async (
  _: any,
  { query }: { query: string },
  { clients: { giphy }}: Context
) => giphy.translateGif(query)

