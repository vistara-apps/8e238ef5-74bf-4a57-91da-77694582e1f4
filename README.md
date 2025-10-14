# VetTech X-ray Guide

Precision X-ray guidance for Vet Techs with interactive 3D models, community insights, and professional NFT credentials.

## Features

- 🔬 **Interactive 3D X-ray Guides** - Rotate, zoom, and explore anatomical models
- 👥 **Community-Validated Tips** - Share and learn from peer expertise
- 🏆 **NFT Skill Badges** - Earn verifiable professional credentials on Base
- 💬 **Peer Mentorship** - Connect with experienced vet techs
- 📱 **Mobile-First Design** - Optimized for on-the-go access

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet Integration**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit SDK
- **3D Graphics**: Three.js + React Three Fiber
- **Styling**: Tailwind CSS with Coinbase theme

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Get your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com)

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)**

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx            # Home page
├── providers.tsx       # OnchainKit provider setup
├── guides/[id]/        # Individual guide pages
├── community/          # Community hub
├── badges/             # NFT badges showcase
└── profile/            # User profile

components/
├── layout/             # Header, navigation
├── guides/             # Guide-related components
├── 3d/                 # 3D viewer components
└── ui/                 # Reusable UI components
```

## Key Features Implementation

### 3D X-ray Viewer
- Built with React Three Fiber
- Interactive controls (rotate, zoom, pan)
- Anatomical overlays and annotations

### Community Tips
- Submit and upvote tips
- Real-time engagement tracking
- Integration with Farcaster for social sharing

### NFT Badges
- ERC-721 tokens on Base
- Gasless minting via Coinbase Paymaster
- Verifiable professional credentials

## Base Mini App Integration

This app is built as a Farcaster Mini App with:
- OnchainKit for wallet and identity
- MiniKit SDK for Farcaster integration
- Frame support for social sharing
- Gasless transactions via Paymaster

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Base Documentation](https://docs.base.org)
- [Farcaster MiniKit](https://miniapps.farcaster.xyz)

## License

MIT
