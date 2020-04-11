#!/bin/bash
set -x

input=$1
basename=$(basename ${input})
name=${basename/\.*/}
suffix=${basename/*\./}
today=$(date "+%Y-%m-%d")

output=$(cat ${input} | openssl base64 | tr -d '\n')

mkdir -p ./_posts/art/

cat << EOF > ./_posts/art/${today}-${name}.md
---
layout: post-art
title: ${name}
category: art
image: data:image/${suffix};base64,${output}
---
EOF

$EDITOR ./_posts/${today}-${name}.md
