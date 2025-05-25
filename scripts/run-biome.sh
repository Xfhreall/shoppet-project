#!/bin/bash
# Hanya jalankan biome pada file yang bukan di src/generated

FILES=()
for file in "$@"
do
  if [[ "$file" != src/generated/* ]]; then
    FILES+=("$file")
  fi
done

if [ ${#FILES[@]} -gt 0 ]; then
  biome check --write --no-errors-on-unmatched "${FILES[@]}"
fi
