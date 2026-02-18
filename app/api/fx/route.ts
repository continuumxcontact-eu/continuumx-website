import { NextResponse } from 'next/server'

export const revalidate = 60 * 60 * 24 // 24 hours

export async function GET() {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      next: { revalidate },
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'FX fetch failed' }, { status: 500 })
    }

    const data = await res.json()
    const rate = data?.rates?.EGP

    if (typeof rate !== 'number') {
      return NextResponse.json({ error: 'No EGP rate' }, { status: 500 })
    }

    return NextResponse.json({
      base: 'USD',
      quote: 'EGP',
      rate,
    })
  } catch {
    return NextResponse.json({ error: 'FX fetch error' }, { status: 500 })
  }
}
