import { NextResponse } from "next/server";
import { footerDummyData } from "../../../utils/staticData";

export async function GET(request: Request) {
  try {
    return NextResponse.json({ data: footerDummyData });
  } catch (error: unknown) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
