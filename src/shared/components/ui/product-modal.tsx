'use client';

import { Badge } from '@/shared/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import { formatCurrency } from '@/shared/utils/format-currency';

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image_url: string;
  category: string;
  createdAt: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
          <DialogDescription>Product details and information</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img
              src={product.image_url || '/placeholder.svg'}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{product.category}</Badge>
              <span className="text-sm text-muted-foreground">
                Created: {new Date(product.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-lg font-semibold text-primary">
              {formatCurrency(Number(product.price))}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
