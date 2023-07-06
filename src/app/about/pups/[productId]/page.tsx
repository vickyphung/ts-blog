export default function ProductDetail({
    params,
  }: {
    params: { productId: string };
  }) {
    return <h1>Details about pup {params.productId}</h1>;
  }