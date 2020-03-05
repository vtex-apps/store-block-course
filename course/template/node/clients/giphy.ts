import {
  ExternalClient,
  InstanceOptions,
  IOContext
} from '@vtex/api'

export default class Giphy extends ExternalClient {
  private routes = {
    translate: (): string => 'translate',
  }
  constructor(
    context: IOContext,
    options?: InstanceOptions) {
    super('https://api.giphy.com/v1/gifs/', context, options)
  }
  public async translateGif(term: string): Promise<any> {
    console.log("term --------------------- ", term)
    const response = await this.http.get(
      this.routes.translate(),
      {
        headers: {
          'X-Vtex-Use-Https': true,
        },
        params: {
          api_key: 'dp2scGnUcDee5yLRI1qJMTRTAAJey9Tl',
          s: term,
        },
      }
    )
    const url = response.data?.images?.original?.url
    console.log("url ---------------- ", url)
    return url
  }
}
