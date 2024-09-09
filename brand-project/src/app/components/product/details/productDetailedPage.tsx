import { Grid } from "semantic-ui-react";
import ProductDetailedHeader from "./productDetailedHeader";
import ProductDetailedInfo from "./productDetailedInfo";
import ProductDetailedChat from "./productDetailedChat";
import ProductDetailedSidebar from "./productDetailedSidebar";

export default function ProductDetailedPage() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProductDetailedHeader />
        <ProductDetailedInfo />
        <ProductDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ProductDetailedSidebar />
      </Grid.Column>
    </Grid>
  )
}
