import { Button } from './button';

export function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  productTitle,
  isLoading,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productTitle: string;
  isLoading: boolean;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-background w-full max-w-md p-6 rounded-xl shadow-lg relative z-50">
        <h2 className="text-lg font-semibold mb-2 text-foreground">
          Are you absolutely sure?
        </h2>
        <p className="text-sm text-muted-foreground mb-6 break-words overflow-hidden text-ellipsis max-w-full">
          This action cannot be undone.
        </p>
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
          <Button
            className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 w-full sm:w-auto"
            onClick={onClose}
            disabled={isLoading}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 w-full sm:w-auto"
            onClick={onConfirm}
            disabled={isLoading}
            variant="destructive"
          >
            {isLoading ? 'Deleting...' : 'Delete Product'}
          </Button>
        </div>
      </div>
    </div>
  );
}
