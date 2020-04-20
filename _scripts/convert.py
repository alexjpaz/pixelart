#!/bin/bash
set -x

input=$1
basename=$(basename ${input})
name=${basename/\.*/}
suffix=${basename/*\./}
today=$(date "+%Y-%m-%d")
post=./_posts/art/${today}-${name}.md

mkdir -p ./_posts/art/
cp $input ./assets/art/${name}.${suffix}

cat << EOF > ${post}
---
layout: post-art
title: ${name}
category: art
image: /assets/art/${name}.${suffix}
---
EOF

$EDITOR ${post}

