import { NextResponse } from "next/server";
import { cardListDummyData } from "../../../utils/staticData";

export async function GET(request: Request) {
  try {
    return NextResponse.json({ data: cardListDummyData });
  } catch (error: unknown) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
