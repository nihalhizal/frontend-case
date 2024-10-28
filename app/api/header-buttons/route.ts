import { NextResponse } from "next/server";
import { headerDummyData } from "../../../utils/staticData";

export async function GET(request: Request) {
  try {
    return NextResponse.json({ data: headerDummyData });
  } catch (error: unknown) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
